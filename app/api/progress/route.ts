import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/app/lib/prisma"; // Uncomment when Progress model is added to schema
export const runtime = "nodejs";

const CORS = {
  "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

// GET /api/progress?userId=xxx - Get user progress
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
    
    if (!userId) {
      return NextResponse.json(
        { error: "userId query parameter is required" },
        { status: 400, headers: CORS }
      );
    }

    // For now, return empty array since we don't have a Progress model yet
    // You can add this to your Prisma schema later
    return NextResponse.json({ data: [] }, { headers: CORS });
  } catch (error) {
    console.error("Error fetching progress:", error);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500, headers: CORS }
    );
  }
}

// POST /api/progress - Save user progress
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, stageKey, status, score } = body;

    // Validation
    if (!userId || !stageKey || !status) {
      return NextResponse.json(
        { error: "Missing required fields: userId, stageKey, status" },
        { status: 400, headers: CORS }
      );
    }

    // For now, just return the data back since we don't have a Progress model
    // You can add this to your Prisma schema later:
    // model Progress {
    //   id        String   @id @default(uuid())
    //   userId    String
    //   stageKey  String
    //   status    String
    //   score     Int?
    //   createdAt DateTime @default(now())
    //   updatedAt DateTime @updatedAt
    // }

    const progress = {
      id: crypto.randomUUID(),
      userId,
      stageKey,
      status,
      score: score || null,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(progress, { status: 201, headers: CORS });
  } catch (error) {
    console.error("Error saving progress:", error);
    return NextResponse.json(
      { error: "Failed to save progress", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500, headers: CORS }
    );
  }
}
