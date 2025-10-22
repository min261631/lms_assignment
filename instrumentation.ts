// instrumentation.ts
import { registerOTel } from "@vercel/otel";
import { PrismaInstrumentation } from "@prisma/instrumentation";

export function register() {
  registerOTel({
    serviceName: process.env.OTEL_SERVICE_NAME || "next-app",
    instrumentations: [
      // DB spans for prisma queries/mutations
      new PrismaInstrumentation(),
    ],
  });
}
