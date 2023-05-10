/*
  Warnings:

  - Added the required column `energy` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `health` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxEnergy` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxHealth` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `energy` INTEGER NOT NULL,
    ADD COLUMN `health` INTEGER NOT NULL,
    ADD COLUMN `maxEnergy` INTEGER NOT NULL,
    ADD COLUMN `maxHealth` INTEGER NOT NULL;
