/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `MenuItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MenuItem_title_key" ON "MenuItem"("title");
