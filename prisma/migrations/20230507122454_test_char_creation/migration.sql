/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stat1` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stat2` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stat3` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stat4` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `village` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `createdAt`,
    DROP COLUMN `gender`,
    DROP COLUMN `stat1`,
    DROP COLUMN `stat2`,
    DROP COLUMN `stat3`,
    DROP COLUMN `stat4`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `village`;

-- CreateTable
CREATE TABLE `Characters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `village` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Characters_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Characters` ADD CONSTRAINT `Characters_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
