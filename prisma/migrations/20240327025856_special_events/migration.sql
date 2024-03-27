-- CreateTable
CREATE TABLE "SpecialEvent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,

    CONSTRAINT "SpecialEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpecialEventAdditional" (
    "id" SERIAL NOT NULL,
    "subTitle" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "specialEventId" INTEGER NOT NULL,

    CONSTRAINT "SpecialEventAdditional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SpecialEventAdditional" ADD CONSTRAINT "SpecialEventAdditional_specialEventId_fkey" FOREIGN KEY ("specialEventId") REFERENCES "SpecialEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
