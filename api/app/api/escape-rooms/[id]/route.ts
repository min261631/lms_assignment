import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export const runtime = "nodejs";

const CORS = {
  "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
  "Access-Control-Allow-Methods": "GET,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

// GET /api/escape-rooms/[id] - Get a single escape room with full details
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const escapeRoom = await prisma.escapeRoom.findUnique({
      where: { id: params.id },
    });

    if (!escapeRoom) {
      return NextResponse.json(
        { error: "Escape room not found" },
        { status: 404, headers: CORS }
      );
    }

    return NextResponse.json(escapeRoom, { headers: CORS });
  } catch (error) {
    console.error("Error fetching escape room:", error);
    return NextResponse.json(
      { error: "Failed to fetch escape room" },
      { status: 500, headers: CORS }
    );
  }
}

// PUT /api/escape-rooms/[id] - Update an escape room
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
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

    // Update escape room in database
    const escapeRoom = await prisma.escapeRoom.update({
      where: { id: params.id },
      data: {
        title,
        description,
        timerMinutes: parseInt(timerMinutes),
        backgroundImage,
        stages: stages,
        generatedHtml,
      },
    });

    return NextResponse.json(escapeRoom, { headers: CORS });
  } catch (error) {
    console.error("Error updating escape room:", error);
    
    // Check if error is because room not found
    if (error instanceof Error && error.message.includes("Record to update not found")) {
      return NextResponse.json(
        { error: "Escape room not found" },
        { status: 404, headers: CORS }
      );
    }

    return NextResponse.json(
      { error: "Failed to update escape room", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500, headers: CORS }
    );
  }
}

// DELETE /api/escape-rooms/[id] - Delete an escape room
export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.escapeRoom.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204, headers: CORS });
  } catch (error) {
    console.error("Error deleting escape room:", error);
    
    // Check if error is because room not found
    if (error instanceof Error && error.message.includes("Record to delete does not exist")) {
      return NextResponse.json(
        { error: "Escape room not found" },
        { status: 404, headers: CORS }
      );
    }

    return NextResponse.json(
      { error: "Failed to delete escape room" },
      { status: 500, headers: CORS }
    );
  }
}

