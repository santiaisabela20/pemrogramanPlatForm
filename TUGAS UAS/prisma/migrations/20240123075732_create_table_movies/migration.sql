-- CreateTable
CREATE TABLE `movies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `production_house` VARCHAR(100) NOT NULL,
    `main_character` VARCHAR(100) NOT NULL,
    `genre` VARCHAR(100) NOT NULL,
    `penulis_naskah` VARCHAR(100) NOT NULL,
    `year` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;

-- AddForeignKey
ALTER TABLE `movies` ADD CONSTRAINT `movies_username_fkey` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
