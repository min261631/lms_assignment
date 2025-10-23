-- CreateEnum
CREATE TYPE "ProgressStatus" AS ENUM ('PENDING', 'CORRECT', 'INCORRECT', 'COMPLETED');

-- CreateTable
CREATE TABLE "Progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "stageKey" TEXT NOT NULL,
    "submittedAnswer" TEXT,
    "result" TEXT,
    "score" INTEGER,
    "status" "ProgressStatus" NOT NULL DEFAULT 'PENDING',
    "timeRemainingS" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Progress_userId_roomId_stageKey_key" ON "Progress"("userId", "roomId", "stageKey");

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "EscapeRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
