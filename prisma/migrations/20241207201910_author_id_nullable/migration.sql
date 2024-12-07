-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_authorId_fkey";

-- AlterTable
ALTER TABLE "List" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
