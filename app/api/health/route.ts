import { trace } from "@opentelemetry/api";
export const runtime = "nodejs";

export async function GET() {
  const span = trace.getTracer("api").startSpan("healthcheck");
  try {
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "content-type": "application/json" },
    });
  } finally {
    span.end();
  }
}
