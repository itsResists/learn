/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `stat1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat2` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat3` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat4` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `stat1` INTEGER NOT NULL,
    ADD COLUMN `stat2` INTEGER NOT NULL,
    ADD COLUMN `stat3` INTEGER NOT NULL,
    ADD COLUMN `stat4` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
