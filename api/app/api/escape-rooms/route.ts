import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export const runtime = "nodejs";

const CORS = {
  "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

// GET /api/escape-rooms - List all escape rooms
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search") || undefined;
    
    const escapeRooms = await prisma.escapeRoom.findMany({
      where: search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
            ],
          }
        : undefined,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        description: true,
        timerMinutes: true,
        backgroundImage: true,
        createdAt: true,
        updatedAt: true,
        // Don't include stages and generatedHtml in list view for performance
      },
    });

    return NextResponse.json({ data: escapeRooms }, { headers: CORS });
  } catch (error) {
    console.error("Error fetching escape rooms:", error);
    return NextResponse.json(
      { error: "Failed to fetch escape rooms" },
      { status: 500, headers: CORS }
    );
  }
}

// POST /api/escape-rooms - Create a new escape room
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, timerMinutes, backgroundImage, stages, generatedHtml } = body;

    // Validation
    if (!title || !description || !timerMinutes || !backgroundImage || !stages || !generatedHtml) {
      return NextResponse.json(
        {
          error: "Missing required fields: title, description, timerMinutes, backgroundImage, stages, generatedHtml",
        },
        { status: 400, headers: CORS }
      );
    }

    if (!Array.isArray(stages) || stages.length === 0) {
      return NextResponse.json(
        { error: "stages must be a non-empty array" },
        { status: 400, headers: CORS }
      );
    }

    // Create escape room in database
    const escapeRoom = await prisma.escapeRoom.create({
      data: {
        title,
        description,
        timerMinutes: parseInt(timerMinutes),
        backgroundImage,
        stages: stages, // Prisma will handle JSON serialization
        generatedHtml,
      },
    });

    return NextResponse.json(escapeRoom, { status: 201, headers: CORS });
  } catch (error) {
    console.error("Error creating escape room:", error);
    return NextResponse.json(
      { error: "Failed to create escape room", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500, headers: CORS }
    );
  }
}

