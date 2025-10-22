import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/app/lib/prisma"; // Uncomment when Progress model is added
import { context, trace, SpanStatusCode } from "@opentelemetry/api";

export const runtime = "nodejs";

const CORS = {
  "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const tracer = trace.getTracer("api.progress");

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

function jsonWithCors(data: unknown, init: ResponseInit & { status?: number } = {}) {
  const status = init.status ?? 200;
  trace.getActiveSpan()?.setAttribute("http.status_code", status);
  return NextResponse.json(data, { ...init, headers: { ...CORS, ...(init.headers || {}) } });
}

// GET /api/progress?userId=xxx
export async function GET(req: NextRequest) {
  return await tracer.startActiveSpan("progress.get", async (span) => {
    try {
      span.setAttribute("http.method", "GET");
      const url = new URL(req.url);
      const userId = url.searchParams.get("userId") || "";

      span.setAttribute("query.userId", userId || "");      

      if (!userId) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Missing userId" });
        return jsonWithCors({ error: "userId query parameter is required" }, { status: 400 });
      }

      // Placeholder until Prisma model exists:
      // const rows = await context.with(trace.setSpan(context.active(), span), () =>
      //   prisma.progress.findMany({ where: { userId }, orderBy: { updatedAt: "desc" } })
      // );
      const rows: unknown[] = [];

      return jsonWithCors({ data: rows }, { status: 200 });
    } catch (error) {
      span.recordException(error as Error);
      span.setStatus({ code: SpanStatusCode.ERROR, message: "Failed to fetch progress" });
      return jsonWithCors({ error: "Failed to fetch progress" }, { status: 500 });
    } finally {
      span.end();
    }
  });
}

// POST /api/progress
export async function POST(req: NextRequest) {
  return await tracer.startActiveSpan("progress.post", async (span) => {
    try {
      span.setAttribute("http.method", "POST");

      const body = await req.json().catch(() => ({}));
      const { userId, stageKey, status, score } = body || {};

      const payloadSize = JSON.stringify(body || {}).length;
      span.setAttribute("payload.size_bytes", payloadSize);
      span.setAttribute("progress.userId", userId ?? "");
      span.setAttribute("progress.stageKey", stageKey ?? "");
      span.setAttribute("progress.status", status ?? "");
      if (typeof score !== "undefined") span.setAttribute("progress.score", Number(score) || 0);

      if (!userId || !stageKey || !status) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Validation error" });
        return jsonWithCors(
          { error: "Missing required fields: userId, stageKey, status" },
          { status: 400 }
        );
      }

      // When you add the model, replace the mock with Prisma:
      // const created = await context.with(trace.setSpan(context.active(), span), () =>
      //   prisma.progress.create({ data: { userId, stageKey, status, score } })
      // );

      const progress = {
        id: crypto.randomUUID(),
        userId,
        stageKey,
        status,
        score: typeof score === "number" ? score : null,
        updatedAt: new Date().toISOString(),
      };

      return jsonWithCors(progress, { status: 201 });
    } catch (error) {
      const message = (error as Error)?.message || "Unknown error";
      span.recordException(error as Error);
      span.setStatus({ code: SpanStatusCode.ERROR, message: "Failed to save progress" });
      return jsonWithCors({ error: "Failed to save progress", details: message }, { status: 500 });
    } finally {
      span.end();
    }
  });
}
