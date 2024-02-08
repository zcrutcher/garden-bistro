-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "party" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "specialRequests" TEXT,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);
