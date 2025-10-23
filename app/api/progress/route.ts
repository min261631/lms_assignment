import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
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

type ProgressStatus = "PENDING" | "CORRECT" | "INCORRECT" | "COMPLETED";

type ProgressBody = {
  userId: string;
  roomId: string;
  stageKey: string;
  submittedAnswer?: string | null;
  result?: string | null;
  score?: number | null;
  status?: ProgressStatus;
  timeRemainingS?: number | null;
};

// GET /api/progress?userId=xxx[&roomId=yyy]
export async function GET(req: NextRequest) {
  return await tracer.startActiveSpan("progress.get", async (span) => {
    try {
      span.setAttribute("http.method", "GET");
      const url = new URL(req.url);
      const userId = url.searchParams.get("userId") || "";
      const roomId = url.searchParams.get("roomId") || "";

      span.setAttribute("query.userId", userId);
      if (roomId) span.setAttribute("query.roomId", roomId);

      if (!userId) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Missing userId" });
        return jsonWithCors({ error: "userId query parameter is required" }, { status: 400 });
      }

      const where = roomId ? { userId, roomId } : { userId };

      const rows = await context.with(trace.setSpan(context.active(), span), () =>
        prisma.progress.findMany({
          where,
          orderBy: [{ createdAt: "asc" }],
        })
      );

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

      const body = (await req.json().catch(() => ({}))) as Partial<ProgressBody>;
      const {
        userId,
        roomId,
        stageKey,
        submittedAnswer = null,
        result = null,
        score = null,
        status = "PENDING",
        timeRemainingS = null,
      } = body;

      const payloadSize = JSON.stringify(body || {}).length;
      span.setAttribute("payload.size_bytes", payloadSize);
      span.setAttribute("progress.userId", userId ?? "");
      span.setAttribute("progress.roomId", roomId ?? "");
      span.setAttribute("progress.stageKey", stageKey ?? "");
      span.setAttribute("progress.status", status ?? "");

      if (!userId || !roomId || !stageKey) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Validation error" });
        return jsonWithCors(
          { error: "Missing required fields: userId, roomId, stageKey" },
          { status: 400 }
        );
      }

      // Basic enum guard (keeps DB clean)
      const allowed: ProgressStatus[] = ["PENDING", "CORRECT", "INCORRECT", "COMPLETED"];
      const safeStatus: ProgressStatus = allowed.includes(status as ProgressStatus)
        ? (status as ProgressStatus)
        : "PENDING";

      const row = await context.with(trace.setSpan(context.active(), span), () =>
        prisma.progress.upsert({
          where: {
            userId_roomId_stageKey: { userId, roomId, stageKey },
          },
          create: {
            userId,
            roomId,
            stageKey,
            submittedAnswer,
            result,
            score: typeof score === "number" ? score : null,
            status: safeStatus,
            timeRemainingS: typeof timeRemainingS === "number" ? timeRemainingS : null,
          },
          update: {
            submittedAnswer,
            result,
            score: typeof score === "number" ? score : null,
            status: safeStatus,
            timeRemainingS: typeof timeRemainingS === "number" ? timeRemainingS : null,
          },
        })
      );

      return jsonWithCors(row, { status: 201 });
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
