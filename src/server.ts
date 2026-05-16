import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

const LEAD_EMAIL = "reactflowbrasil@gmail.com";
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${LEAD_EMAIL}`;
const FORMSUBMIT_URL = `https://formsubmit.co/${LEAD_EMAIL}`;

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function jsonResponse(payload: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...init?.headers,
    },
  });
}

function leadText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function formBody(fields: Record<string, string>): URLSearchParams {
  const body = new URLSearchParams();
  Object.entries(fields).forEach(([key, value]) => body.set(key, value));
  return body;
}

async function postToFormSubmit(url: string, body: URLSearchParams): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    return await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json, text/html;q=0.9, */*;q=0.8",
        "content-type": "application/x-www-form-urlencoded",
      },
      body,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function submitLead(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "Method not allowed" }, { status: 405 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const fields = payload && typeof payload === "object" ? (payload as Record<string, unknown>) : {};
  const nome = leadText(fields.nome);
  const whatsapp = leadText(fields.whatsapp);
  const instagram = leadText(fields.instagram);

  if (!nome || !whatsapp || !instagram) {
    return jsonResponse({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const body = formBody({
    nome,
    whatsapp,
    instagram,
    email_destino: LEAD_EMAIL,
    origem: "Landing Page Tortas Flow",
    _captcha: "false",
    _subject: "Novo lead para compra do curso Tortas Flow",
    _template: "table",
  });

  try {
    const ajaxResponse = await postToFormSubmit(FORMSUBMIT_AJAX_URL, body);

    if (ajaxResponse.ok) {
      return jsonResponse({ ok: true });
    }

    const fallbackResponse = await postToFormSubmit(FORMSUBMIT_URL, body);

    if (fallbackResponse.ok || fallbackResponse.status === 302) {
      return jsonResponse({ ok: true });
    }

    console.error(
      `Lead submission failed: ajax=${ajaxResponse.status}, fallback=${fallbackResponse.status}`,
    );
    return jsonResponse({ ok: false, error: "Lead provider failed" }, { status: 502 });
  } catch (error) {
    console.error("Lead submission error", error);
    return jsonResponse({ ok: false, error: "Lead provider unavailable" }, { status: 502 });
  }
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/submit-lead") {
        return await submitLead(request);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
