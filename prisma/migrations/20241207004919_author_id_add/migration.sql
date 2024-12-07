/*
  Warnings:

  - Added the required column `authorId` to the `List` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listId` to the `ListItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_id_fkey";

-- DropForeignKey
ALTER TABLE "ListItem" DROP CONSTRAINT "ListItem_id_fkey";

-- AlterTable
ALTER TABLE "List" ADD COLUMN     "authorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ListItem" ADD COLUMN     "listId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListItem" ADD CONSTRAINT "ListItem_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
