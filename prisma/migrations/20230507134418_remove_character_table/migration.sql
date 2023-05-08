/*
  Warnings:

  - You are about to drop the `Characters` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat2` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat3` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stat4` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `village` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Characters` DROP FOREIGN KEY `Characters_userId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `stat1` INTEGER NOT NULL,
    ADD COLUMN `stat2` INTEGER NOT NULL,
    ADD COLUMN `stat3` INTEGER NOT NULL,
    ADD COLUMN `stat4` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `village` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Characters`;
