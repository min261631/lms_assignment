-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "LineStatus";

-- CreateTable
CREATE TABLE "EscapeRoom" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timerMinutes" INTEGER NOT NULL,
    "backgroundImage" TEXT NOT NULL,
    "stages" JSONB NOT NULL,
    "generatedHtml" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EscapeRoom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EscapeRoom_createdAt_idx" ON "EscapeRoom"("createdAt");

