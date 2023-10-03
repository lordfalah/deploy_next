/*
  Warnings:

  - Added the required column `productsId` to the `Categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "productsId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(10,0) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
