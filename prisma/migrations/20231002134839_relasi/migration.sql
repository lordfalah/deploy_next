/*
  Warnings:

  - You are about to drop the column `productsId` on the `Categories` table. All the data in the column will be lost.
  - Added the required column `categoriesId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_productsId_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "productsId";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "categoriesId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
