import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { context, trace, SpanStatusCode } from "@opentelemetry/api";

export const runtime = "nodejs";

const CORS = {
  "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
  "Access-Control-Allow-Methods": "GET,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const tracer = trace.getTracer("api.escape-room");

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

/** Helper: send JSON with CORS + set span status code attribute */
function jsonWithCors(
  data: unknown,
  init: ResponseInit & { status?: number } = {}
) {
  const status = init.status ?? 200;
  trace.getActiveSpan()?.setAttribute("http.status_code", status);
  return NextResponse.json(data, { ...init, headers: { ...CORS, ...(init.headers || {}) } });
}

/** GET /api/escape-rooms/[id] */
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return await tracer.startActiveSpan("escape_room.get", async (span) => {
    try {
      const { id } = params;
      span.setAttribute("room.id", id);
      span.setAttribute("http.method", "GET");

      const escapeRoom = await context.with(trace.setSpan(context.active(), span), () =>
        prisma.escapeRoom.findUnique({ where: { id } })
      );

      if (!escapeRoom) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Not Found" });
        return jsonWithCors({ error: "Escape room not found" }, { status: 404 });
      }

      return jsonWithCors(escapeRoom, { status: 200 });
    } catch (error) {
      span.recordException(error as Error);
      span.setStatus({ code: SpanStatusCode.ERROR, message: "Failed to fetch escape room" });
      return jsonWithCors({ error: "Failed to fetch escape room" }, { status: 500 });
    } finally {
      span.end();
    }
  });
}

/** PUT /api/escape-rooms/[id] */
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  return await tracer.startActiveSpan("escape_room.update", async (span) => {
    try {
      const { id } = params;
      span.setAttribute("room.id", id);
      span.setAttribute("http.method", "PUT");

      const body = await req.json();
      const { title, description, timerMinutes, backgroundImage, stages, generatedHtml } = body;

      // Basic validation
      if (!title || !description || timerMinutes == null || !backgroundImage || !stages || !generatedHtml) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Validation error: missing fields" });
        return jsonWithCors(
          {
            error:
              "Missing required fields: title, description, timerMinutes, backgroundImage, stages, generatedHtml",
          },
          { status: 400 }
        );
      }

      if (!Array.isArray(stages) || stages.length === 0) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Validation error: stages empty" });
        return jsonWithCors({ error: "stages must be a non-empty array" }, { status: 400 });
      }

      const timer = typeof timerMinutes === "string" ? parseInt(timerMinutes, 10) : Number(timerMinutes);
      if (!Number.isFinite(timer) || timer <= 0) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Validation error: timerMinutes invalid" });
        return jsonWithCors({ error: "timerMinutes must be a positive number" }, { status: 400 });
      }

      // Useful attributes for debugging
      const payloadSize = JSON.stringify(body || {}).length;
      span.setAttribute("payload.size_bytes", payloadSize);
      span.setAttribute("stages.count", stages.length);
      span.setAttribute("timer.minutes", timer);

      const escapeRoom = await context.with(trace.setSpan(context.active(), span), () =>
        prisma.escapeRoom.update({
          where: { id },
          data: {
            title,
            description,
            timerMinutes: timer,
            backgroundImage,
            stages,
            generatedHtml,
          },
        })
      );

      return jsonWithCors(escapeRoom, { status: 200 });
    } catch (error) {
      const message = (error as Error)?.message || "Unknown error";
      span.recordException(error as Error);

      // Prisma "record not found" handling
      if (message.includes("Record to update not found")) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Not Found" });
        return jsonWithCors({ error: "Escape room not found" }, { status: 404 });
      }

      span.setStatus({ code: SpanStatusCode.ERROR, message: "Failed to update escape room" });
      return jsonWithCors({ error: "Failed to update escape room", details: message }, { status: 500 });
    } finally {
      span.end();
    }
  });
}

/** DELETE /api/escape-rooms/[id] */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return await tracer.startActiveSpan("escape_room.delete", async (span) => {
    try {
      const { id } = params;
      span.setAttribute("room.id", id);
      span.setAttribute("http.method", "DELETE");

      await context.with(trace.setSpan(context.active(), span), () =>
        prisma.escapeRoom.delete({ where: { id } })
      );

      return new NextResponse(null, { status: 204, headers: CORS });
    } catch (error) {
      const message = (error as Error)?.message || "Unknown error";
      span.recordException(error as Error);

      if (message.includes("Record to delete does not exist")) {
        span.setStatus({ code: SpanStatusCode.ERROR, message: "Not Found" });
        return jsonWithCors({ error: "Escape room not found" }, { status: 404 });
      }

      span.setStatus({ code: SpanStatusCode.ERROR, message: "Failed to delete escape room" });
      return jsonWithCors({ error: "Failed to delete escape room" }, { status: 500 });
    } finally {
      span.end();
    }
  });
}
