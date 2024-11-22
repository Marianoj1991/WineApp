/*
  Warnings:

  - You are about to drop the column `userId` on the `Wine` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Wine" DROP CONSTRAINT "Wine_userId_fkey";

-- AlterTable
ALTER TABLE "Wine" DROP COLUMN "userId";
