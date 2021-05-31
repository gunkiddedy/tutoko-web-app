-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.19-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for tutoko-app
CREATE DATABASE IF NOT EXISTS `tutoko-app` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `tutoko-app`;

-- Dumping structure for table tutoko-app.barang
CREATE TABLE IF NOT EXISTS `barang` (
  `barang_id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_nama` varchar(50) DEFAULT NULL,
  `barang_stok` int(11) NOT NULL DEFAULT 0,
  `barang_satuan` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`barang_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko-app.barang: 2 rows
/*!40000 ALTER TABLE `barang` DISABLE KEYS */;
INSERT INTO `barang` (`barang_id`, `barang_nama`, `barang_stok`, `barang_satuan`, `created_at`, `updated_at`) VALUES
	(1, 'semen 3 roda', 195, 'sak', '2021-05-31 16:52:17', '2021-06-01 00:11:23'),
	(2, 'konblok', 105, 'bis', '2021-05-31 21:36:45', '2021-06-01 00:14:28');
/*!40000 ALTER TABLE `barang` ENABLE KEYS */;

-- Dumping structure for view tutoko-app.detail_invoice_keluar
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `detail_invoice_keluar` (
	`penjualan_id` INT(11) NULL,
	`users_id` INT(11) NULL,
	`barang_id` INT(11) NULL,
	`tanggal` DATE NULL,
	`jumlah` INT(11) NULL,
	`harga_jual` DOUBLE NULL COMMENT 'harga jual satuan',
	`payment` DOUBLE NULL,
	`nama_pembeli` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`phone_pembeli` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`alamat_pembeli` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`created_at` TIMESTAMP NULL,
	`updated_at` TIMESTAMP NULL,
	`barang_nama` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_stok` INT(11) NULL,
	`barang_satuan` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`tagihan` DOUBLE NULL
) ENGINE=MyISAM;

-- Dumping structure for view tutoko-app.detail_invoice_masuk
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `detail_invoice_masuk` (
	`pembelian_id` INT(11) NULL,
	`users_id` INT(11) NULL,
	`supplier_id` INT(11) NULL,
	`barang_id` INT(11) NULL,
	`tanggal` DATE NULL,
	`jumlah` INT(11) NULL,
	`harga_beli` DOUBLE NULL COMMENT 'harga beli satuan',
	`payment` DOUBLE NULL,
	`harga_jual_standar` DOUBLE NULL,
	`harga_jual_grosir` DOUBLE NULL,
	`created_at` TIMESTAMP NULL,
	`updated_at` TIMESTAMP NULL,
	`barang_nama` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_stok` INT(11) NULL,
	`barang_satuan` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`tagihan` DOUBLE NULL
) ENGINE=MyISAM;

-- Dumping structure for table tutoko-app.invoice_keluar
CREATE TABLE IF NOT EXISTS `invoice_keluar` (
  `invoice_keluar_id` int(11) NOT NULL AUTO_INCREMENT,
  `penjualan_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`invoice_keluar_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko-app.invoice_keluar: 4 rows
/*!40000 ALTER TABLE `invoice_keluar` DISABLE KEYS */;
INSERT INTO `invoice_keluar` (`invoice_keluar_id`, `penjualan_id`, `created_at`, `updated_at`) VALUES
	(1, 1, '2021-05-31 20:49:57', '2021-05-31 21:37:01'),
	(3, 4, '2021-05-31 23:16:26', '2021-05-31 23:16:26'),
	(4, 5, '2021-06-01 00:01:58', '2021-06-01 00:01:58'),
	(5, 6, '2021-06-01 00:02:55', '2021-06-01 00:02:55');
/*!40000 ALTER TABLE `invoice_keluar` ENABLE KEYS */;

-- Dumping structure for table tutoko-app.invoice_masuk
CREATE TABLE IF NOT EXISTS `invoice_masuk` (
  `invoice_masuk_id` int(11) NOT NULL AUTO_INCREMENT,
  `pembelian_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`invoice_masuk_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko-app.invoice_masuk: 4 rows
/*!40000 ALTER TABLE `invoice_masuk` DISABLE KEYS */;
INSERT INTO `invoice_masuk` (`invoice_masuk_id`, `pembelian_id`, `created_at`, `updated_at`) VALUES
	(1, 1, '2021-05-31 23:16:07', '2021-05-31 23:16:07'),
	(2, 4, '2021-05-31 23:16:10', '2021-05-31 23:16:10'),
	(3, 9, '2021-05-31 23:16:14', '2021-05-31 23:16:14'),
	(4, 10, '2021-06-01 00:11:50', '2021-06-01 00:11:50');
/*!40000 ALTER TABLE `invoice_masuk` ENABLE KEYS */;

-- Dumping structure for table tutoko-app.pegawai
CREATE TABLE IF NOT EXISTS `pegawai` (
  `pegawai_id` int(11) NOT NULL AUTO_INCREMENT,
  `pegawai_nama` varchar(50) NOT NULL,
  `pegawai_phone` varchar(50) DEFAULT NULL,
  `pegawai_alamat` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`pegawai_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko-app.pegawai: 1 rows
/*!40000 ALTER TABLE `pegawai` DISABLE KEYS */;
INSERT INTO `pegawai` (`pegawai_id`, `pegawai_nama`, `pegawai_phone`, `pegawai_alamat`, `created_at`, `updated_at`) VALUES
	(1, 'larno', '9879876454', 'ponjong', '2021-05-31 21:38:01', '2021-05-31 21:38:04');
/*!40000 ALTER TABLE `pegawai` ENABLE KEYS */;

-- Dumping structure for table tutoko-app.pembelian
CREATE TABLE IF NOT EXISTS `pembelian` (
  `pembelian_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL DEFAULT 0,
  `supplier_id` int(11) NOT NULL DEFAULT 0,
  `barang_id` int(11) NOT NULL DEFAULT 0,
  `tanggal` date DEFAULT NULL,
  `jumlah` int(11) NOT NULL DEFAULT 0,
  `harga_beli` double NOT NULL DEFAULT 0 COMMENT 'harga beli satuan',
  `payment` double NOT NULL DEFAULT 0,
  `harga_jual_standar` double NOT NULL DEFAULT 0,
  `harga_jual_grosir` double NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`pembelian_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko-app.pembelian: 4 rows
/*!40000 ALTER TABLE `pembelian` DISABLE KEYS */;
INSERT INTO `pembelian` (`pembelian_id`, `users_id`, `supplier_id`, `barang_id`, `tanggal`, `jumlah`, `harga_beli`, `payment`, `harga_jual_standar`, `harga_jual_grosir`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, 1, '2021-05-31', 100, 30000, 3000000, 35000, 33000, '2021-05-31 14:46:30', '2021-05-31 23:46:08'),
	(4, 1, 1, 1, '2021-05-31', 100, 25000, 2500000, 30000, 27000, '2021-05-31 22:35:24', '2021-05-31 23:45:47'),
	(9, 1, 1, 1, '2021-05-31', 5, 20000, 100000, 25000, 23000, '2021-05-31 23:12:34', '2021-05-31 23:40:17'),
	(10, 1, 1, 1, '2021-06-01', 100, 32000, 3100000, 37000, 35000, '2021-06-01 00:11:23', '2021-06-01 00:13:32');
/*!40000 ALTER TABLE `pembelian` ENABLE KEYS */;

-- Dumping structure for table tutoko-app.penjualan
CREATE TABLE IF NOT EXISTS `penjualan` (
  `penjualan_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL DEFAULT 0,
  `barang_id` int(11) NOT NULL DEFAULT 0,
  `tanggal` date DEFAULT NULL,
  `jumlah` int(11) NOT NULL DEFAULT 0,
  `harga_jual` double NOT NULL DEFAULT 0 COMMENT 'harga jual satuan',
  `payment` double NOT NULL DEFAULT 0,
  `nama_pembeli` varchar(50) DEFAULT NULL,
  `phone_pembeli` varchar(50) DEFAULT NULL,
  `alamat_pembeli` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`penjualan_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko-app.penjualan: 4 rows
/*!40000 ALTER TABLE `penjualan` DISABLE KEYS */;
INSERT INTO `penjualan` (`penjualan_id`, `users_id`, `barang_id`, `tanggal`, `jumlah`, `harga_jual`, `payment`, `nama_pembeli`, `phone_pembeli`, `alamat_pembeli`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, '2021-05-31', 10, 35000, 350000, 'larno', '0998789877', 'sidorejo', '2021-05-31 17:00:32', '2021-06-01 00:03:40'),
	(4, 1, 2, '2021-05-31', 12, 33000, 396000, 'walojan', '31321313', 'jabar', '2021-05-31 22:41:18', '2021-06-01 00:03:37'),
	(5, 1, 1, '2021-05-31', 5, 35000, 50000, 'marino', '09877898777', 'pati', '2021-05-31 23:54:45', '2021-05-31 23:57:04'),
	(6, 1, 1, '2021-06-01', 5, 35000, 175000, 'walijan', '0987654323', 'pati', '2021-06-01 00:02:46', '2021-06-01 00:04:38');
/*!40000 ALTER TABLE `penjualan` ENABLE KEYS */;

-- Dumping structure for table tutoko-app.produksi
CREATE TABLE IF NOT EXISTS `produksi` (
  `produksi_id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_id` int(11) NOT NULL DEFAULT 0,
  `pegawai_id` int(11) NOT NULL DEFAULT 0,
  `produksi_tanggal` date DEFAULT NULL,
  `produksi_jumlah` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`produksi_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko-app.produksi: 1 rows
/*!40000 ALTER TABLE `produksi` DISABLE KEYS */;
INSERT INTO `produksi` (`produksi_id`, `barang_id`, `pegawai_id`, `produksi_tanggal`, `produksi_jumlah`, `created_at`, `updated_at`) VALUES
	(1, 2, 1, '2021-05-31', 2, '2021-05-31 21:37:28', '2021-05-31 22:48:49'),
	(2, 2, 1, '2021-06-01', 5, '2021-06-01 00:14:28', '2021-06-01 00:14:28');
/*!40000 ALTER TABLE `produksi` ENABLE KEYS */;

-- Dumping structure for table tutoko-app.supplier
CREATE TABLE IF NOT EXISTS `supplier` (
  `supplier_id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier_nama` varchar(50) NOT NULL,
  `supplier_phone` varchar(50) DEFAULT NULL,
  `supplier_alamat` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`supplier_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutoko-app.supplier: 1 rows
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` (`supplier_id`, `supplier_nama`, `supplier_phone`, `supplier_alamat`, `created_at`, `updated_at`) VALUES
	(1, 'adi', '0989', 'kalasan sleman yogyakarta', '2021-05-31 14:39:48', '2021-05-31 14:41:17');
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;

-- Dumping structure for table tutoko-app.users
CREATE TABLE IF NOT EXISTS `users` (
  `users_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(225) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `telp` varchar(20) NOT NULL DEFAULT '',
  `alamat` varchar(50) NOT NULL DEFAULT '',
  `role` varchar(50) NOT NULL DEFAULT 'admin',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`users_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=179 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko-app.users: 1 rows
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`users_id`, `username`, `password`, `fullname`, `telp`, `alamat`, `role`, `created_at`, `updated_at`) VALUES
	(1, 'admin', '$2y$10$8T9ndyF0KNeqVzPo4rutoOq29oUMm9hs8d2U429tUoq0HO1gPh2D6', 'admin@admin.com', '098778900987', 'ponjong', 'admin', '2020-12-06 19:16:43', '2021-05-31 16:55:52');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for trigger tutoko-app.AFTER_INSERT_PEMBELIAN
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AFTER_INSERT_PEMBELIAN` AFTER INSERT ON `pembelian` FOR EACH ROW BEGIN
  IF NEW.jumlah > 0 THEN 
  	 	UPDATE barang SET barang_stok = barang_stok + NEW.jumlah
   	WHERE barang_id = NEW.barang_id;
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for trigger tutoko-app.AFTER_INSERT_PENJUALAN
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AFTER_INSERT_PENJUALAN` AFTER INSERT ON `penjualan` FOR EACH ROW BEGIN
  IF NEW.jumlah > 0 THEN 
  	 	UPDATE barang SET barang_stok = barang_stok - NEW.jumlah
   	WHERE barang_id = NEW.barang_id;
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for trigger tutoko-app.AFTER_INSERT_PRODUKSI
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AFTER_INSERT_PRODUKSI` AFTER INSERT ON `produksi` FOR EACH ROW BEGIN
  IF NEW.produksi_jumlah > 0 THEN 
  	 	UPDATE barang SET barang_stok = barang_stok + NEW.produksi_jumlah
   	WHERE barang_id = NEW.barang_id;
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for view tutoko-app.detail_invoice_keluar
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_invoice_keluar`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_invoice_keluar` AS select `p`.`penjualan_id` AS `penjualan_id`,`p`.`users_id` AS `users_id`,`p`.`barang_id` AS `barang_id`,`p`.`tanggal` AS `tanggal`,`p`.`jumlah` AS `jumlah`,`p`.`harga_jual` AS `harga_jual`,`p`.`payment` AS `payment`,`p`.`nama_pembeli` AS `nama_pembeli`,`p`.`phone_pembeli` AS `phone_pembeli`,`p`.`alamat_pembeli` AS `alamat_pembeli`,`p`.`created_at` AS `created_at`,`p`.`updated_at` AS `updated_at`,`b`.`barang_nama` AS `barang_nama`,`b`.`barang_stok` AS `barang_stok`,`b`.`barang_satuan` AS `barang_satuan`,`p`.`payment` - `p`.`jumlah` * `p`.`harga_jual` AS `tagihan` from ((`invoice_keluar` `i` left join `penjualan` `p` on(`i`.`penjualan_id` = `p`.`penjualan_id`)) left join `barang` `b` on(`b`.`barang_id` = `p`.`barang_id`));

-- Dumping structure for view tutoko-app.detail_invoice_masuk
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_invoice_masuk`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_invoice_masuk` AS select `p`.`pembelian_id` AS `pembelian_id`,`p`.`users_id` AS `users_id`,`p`.`supplier_id` AS `supplier_id`,`p`.`barang_id` AS `barang_id`,`p`.`tanggal` AS `tanggal`,`p`.`jumlah` AS `jumlah`,`p`.`harga_beli` AS `harga_beli`,`p`.`payment` AS `payment`,`p`.`harga_jual_standar` AS `harga_jual_standar`,`p`.`harga_jual_grosir` AS `harga_jual_grosir`,`p`.`created_at` AS `created_at`,`p`.`updated_at` AS `updated_at`,`b`.`barang_nama` AS `barang_nama`,`b`.`barang_stok` AS `barang_stok`,`b`.`barang_satuan` AS `barang_satuan`,`p`.`payment` - `p`.`harga_beli` * `p`.`jumlah` AS `tagihan` from ((`invoice_masuk` `i` left join `pembelian` `p` on(`i`.`pembelian_id` = `p`.`pembelian_id`)) left join `barang` `b` on(`p`.`barang_id` = `b`.`barang_id`));

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
