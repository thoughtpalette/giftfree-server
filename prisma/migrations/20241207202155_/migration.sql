/*
  Warnings:

  - Made the column `authorId` on table `List` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_authorId_fkey";

-- AlterTable
ALTER TABLE "List" ALTER COLUMN "authorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
