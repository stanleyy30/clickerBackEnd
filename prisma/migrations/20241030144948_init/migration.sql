/*
  Warnings:

  - You are about to drop the column `points` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `powerClick` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `superPowerClick` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "points",
DROP COLUMN "powerClick",
DROP COLUMN "superPowerClick",
ADD COLUMN     "increment" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "money" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "superIncrement" INTEGER NOT NULL DEFAULT 0;
