/*
  Warnings:

  - Made the column `userId` on table `Wine` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Wine" DROP CONSTRAINT "Wine_userId_fkey";

-- AlterTable
ALTER TABLE "Wine" ADD COLUMN     "img" TEXT,
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Wine" ADD CONSTRAINT "Wine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
