/*
  Warnings:

  - Added the required column `avatar` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat5` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat6` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat7` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat8` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yen` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `avatar` VARCHAR(191) NOT NULL,
    ADD COLUMN `stat5` INTEGER NOT NULL,
    ADD COLUMN `stat6` INTEGER NOT NULL,
    ADD COLUMN `stat7` INTEGER NOT NULL,
    ADD COLUMN `stat8` INTEGER NOT NULL,
    ADD COLUMN `yen` VARCHAR(191) NOT NULL;
