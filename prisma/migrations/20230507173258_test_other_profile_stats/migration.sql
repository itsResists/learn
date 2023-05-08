/*
  Warnings:

  - Added the required column `experience` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `experience` VARCHAR(191) NOT NULL,
    ADD COLUMN `level` VARCHAR(191) NOT NULL,
    ADD COLUMN `rank` VARCHAR(191) NOT NULL;
