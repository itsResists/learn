/*
  Warnings:

  - You are about to alter the column `experience` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `level` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `yen` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `experience` INTEGER NOT NULL,
    MODIFY `level` INTEGER NOT NULL,
    MODIFY `yen` INTEGER NOT NULL;
