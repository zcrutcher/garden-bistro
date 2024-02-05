-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
