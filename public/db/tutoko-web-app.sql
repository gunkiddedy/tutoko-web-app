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

-- Dumping structure for table tutoko.barangs
CREATE TABLE IF NOT EXISTS `barangs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_nama` varchar(50) DEFAULT NULL,
  `barang_stok` int(11) NOT NULL DEFAULT 0,
  `barang_satuan` varchar(50) DEFAULT NULL,
  `barang_tipe` enum('Mandiri','Supplier') DEFAULT 'Supplier',
  `photo` varchar(225) DEFAULT NULL,
  `active` enum('Active','Inactive') DEFAULT 'Active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.barangs: 2 rows
/*!40000 ALTER TABLE `barangs` DISABLE KEYS */;
INSERT INTO `barangs` (`id`, `barang_nama`, `barang_stok`, `barang_satuan`, `barang_tipe`, `photo`, `active`, `created_at`, `updated_at`) VALUES
	(1, 'semen holcims', 79, 'sak', 'Supplier', 'images/Capture-817.JPG', 'Active', '2021-06-13 03:02:10', '2021-06-22 23:56:43'),
	(2, 'batu bata', 0, 'biji', 'Mandiri', 'images/prenjak_lumut-432.JPG', 'Active', '2021-06-13 03:02:47', '2021-06-18 14:57:17');
/*!40000 ALTER TABLE `barangs` ENABLE KEYS */;

-- Dumping structure for view tutoko.detail_invoice_keluar
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `detail_invoice_keluar` (
	`id` INT(11) NULL,
	`user_id` INT(11) NULL,
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

-- Dumping structure for view tutoko.detail_invoice_masuk
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `detail_invoice_masuk` (
	`id` INT(11) NULL,
	`user_id` INT(11) NULL,
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
	`supplier_nama` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`tagihan` DOUBLE NULL,
	`fullname` VARCHAR(50) NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Dumping structure for view tutoko.detail_pembelian
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `detail_pembelian` (
	`supplier_nama` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`supplier_phone` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`supplier_alamat` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_nama` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_stok` INT(11) NULL,
	`barang_satuan` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_tipe` ENUM('Mandiri','Supplier') NULL COLLATE 'utf8mb4_general_ci',
	`photo` VARCHAR(225) NULL COLLATE 'utf8mb4_general_ci',
	`active` ENUM('Active','Inactive') NULL COLLATE 'utf8mb4_general_ci',
	`id` INT(11) NOT NULL,
	`user_id` INT(11) NOT NULL,
	`supplier_id` INT(11) NOT NULL,
	`barang_id` INT(11) NOT NULL,
	`tanggal` DATE NULL,
	`jumlah` INT(11) NOT NULL,
	`harga_beli` DOUBLE NOT NULL COMMENT 'harga beli satuan',
	`payment` DOUBLE NOT NULL,
	`harga_jual_standar` DOUBLE NOT NULL,
	`harga_jual_grosir` DOUBLE NOT NULL,
	`created_at` TIMESTAMP NOT NULL,
	`updated_at` TIMESTAMP NOT NULL,
	`tagihan` DOUBLE NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view tutoko.detail_penjualan
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `detail_penjualan` (
	`barang_nama` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_stok` INT(11) NULL,
	`barang_satuan` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_tipe` ENUM('Mandiri','Supplier') NULL COLLATE 'utf8mb4_general_ci',
	`photo` VARCHAR(225) NULL COLLATE 'utf8mb4_general_ci',
	`active` ENUM('Active','Inactive') NULL COLLATE 'utf8mb4_general_ci',
	`id` INT(11) NOT NULL,
	`user_id` INT(11) NOT NULL,
	`barang_id` INT(11) NOT NULL,
	`tanggal` DATE NULL,
	`jumlah` INT(11) NOT NULL,
	`harga_jual` DOUBLE NOT NULL COMMENT 'harga jual satuan',
	`payment` DOUBLE NOT NULL,
	`nama_pembeli` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`phone_pembeli` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`alamat_pembeli` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`created_at` TIMESTAMP NOT NULL,
	`updated_at` TIMESTAMP NOT NULL,
	`tagihan` DOUBLE NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for table tutoko.invoice_keluars
CREATE TABLE IF NOT EXISTS `invoice_keluars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `penjualan_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.invoice_keluars: 4 rows
/*!40000 ALTER TABLE `invoice_keluars` DISABLE KEYS */;
INSERT INTO `invoice_keluars` (`id`, `penjualan_id`, `created_at`, `updated_at`) VALUES
	(1, 1, '2021-05-31 20:49:57', '2021-05-31 21:37:01'),
	(3, 4, '2021-05-31 23:16:26', '2021-05-31 23:16:26'),
	(4, 5, '2021-06-01 00:01:58', '2021-06-01 00:01:58'),
	(5, 6, '2021-06-01 00:02:55', '2021-06-01 00:02:55');
/*!40000 ALTER TABLE `invoice_keluars` ENABLE KEYS */;

-- Dumping structure for table tutoko.invoice_masuks
CREATE TABLE IF NOT EXISTS `invoice_masuks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pembelian_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.invoice_masuks: 4 rows
/*!40000 ALTER TABLE `invoice_masuks` DISABLE KEYS */;
INSERT INTO `invoice_masuks` (`id`, `pembelian_id`, `created_at`, `updated_at`) VALUES
	(1, 1, '2021-05-31 23:16:07', '2021-05-31 23:16:07'),
	(2, 4, '2021-05-31 23:16:10', '2021-05-31 23:16:10'),
	(3, 9, '2021-05-31 23:16:14', '2021-05-31 23:16:14'),
	(4, 10, '2021-06-01 00:11:50', '2021-06-01 00:11:50');
/*!40000 ALTER TABLE `invoice_masuks` ENABLE KEYS */;

-- Dumping structure for table tutoko.pegawais
CREATE TABLE IF NOT EXISTS `pegawais` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pegawai_nama` varchar(50) NOT NULL,
  `pegawai_phone` varchar(50) DEFAULT NULL,
  `pegawai_alamat` varchar(50) DEFAULT NULL,
  `active` enum('Active','Inactive') DEFAULT 'Active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.pegawais: 2 rows
/*!40000 ALTER TABLE `pegawais` DISABLE KEYS */;
INSERT INTO `pegawais` (`id`, `pegawai_nama`, `pegawai_phone`, `pegawai_alamat`, `active`, `created_at`, `updated_at`) VALUES
	(1, 'larnoss', '9999', 'sidorejo', 'Active', '2021-05-31 21:38:01', '2021-06-21 03:42:04'),
	(3, 'larniss', '0987', 'jjuju', 'Active', '2021-06-21 04:08:02', '2021-06-21 04:08:09');
/*!40000 ALTER TABLE `pegawais` ENABLE KEYS */;

-- Dumping structure for table tutoko.pembelians
CREATE TABLE IF NOT EXISTS `pembelians` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT 1,
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.pembelians: 5 rows
/*!40000 ALTER TABLE `pembelians` DISABLE KEYS */;
INSERT INTO `pembelians` (`id`, `user_id`, `supplier_id`, `barang_id`, `tanggal`, `jumlah`, `harga_beli`, `payment`, `harga_jual_standar`, `harga_jual_grosir`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, 1, '2021-06-13', 5, 1000, 4000, 15000, 14000, '2021-06-13 05:54:53', '2021-06-17 05:23:27'),
	(3, 1, 2, 1, '2021-06-13', 5, 12000, 50000, 15000, 14000, '2021-06-13 07:26:42', '2021-06-17 05:40:00'),
	(4, 1, 1, 1, '2021-06-14', 9, 1000, 9000, 15000, 14000, '2021-06-13 07:49:20', '2021-06-17 05:25:35'),
	(5, 1, 3, 2, '2021-06-17', 100, 1700, 170000, 2500, 2200, '2021-06-17 05:05:16', '2021-06-17 05:58:00'),
	(6, 1, 2, 1, '2021-06-22', 100, 10000, 1000000, 15000, 14000, '2021-06-22 07:30:39', '2021-06-22 16:58:37');
/*!40000 ALTER TABLE `pembelians` ENABLE KEYS */;

-- Dumping structure for table tutoko.penjualans
CREATE TABLE IF NOT EXISTS `penjualans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT 1,
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.penjualans: 11 rows
/*!40000 ALTER TABLE `penjualans` DISABLE KEYS */;
INSERT INTO `penjualans` (`id`, `user_id`, `barang_id`, `tanggal`, `jumlah`, `harga_jual`, `payment`, `nama_pembeli`, `phone_pembeli`, `alamat_pembeli`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, '2021-06-12', 5, 20000, 90000, 'ripto', '0987788090987', 'karangijo', '2021-06-13 09:03:14', '2021-06-13 16:04:52'),
	(2, 1, 1, '2021-06-13', 1, 35000, 35000, NULL, NULL, NULL, '2021-06-13 09:34:57', '2021-06-13 09:34:57'),
	(3, 1, 1, '2021-06-16', 5, 15000, 70000, 'arnto', '123443132321', 'karangijo', '2021-06-16 08:50:21', '2021-06-16 08:50:21'),
	(4, 1, 1, '2021-06-16', 5, 15000, 70000, 'arnto', '123443132321', 'karangijo', '2021-06-16 08:50:39', '2021-06-16 08:50:39'),
	(5, 1, 1, '2021-06-16', 5, 15000, 70000, 'arnto', '123443132321', 'karangijo', '2021-06-16 08:51:18', '2021-06-16 08:51:18'),
	(6, 1, 1, '2021-06-16', 1, 14000, 14000, '-', '-', '-', '2021-06-16 08:52:45', '2021-06-16 08:52:45'),
	(7, 1, 1, '2021-06-16', 3, 14000, 42000, '-', '-', '-', '2021-06-16 09:16:18', '2021-06-16 09:16:18'),
	(8, 1, 2, '2021-06-17', 100, 2550, 255000, 'a', 'b', 'c', '2021-06-17 05:07:21', '2021-06-20 17:16:51'),
	(10, 1, 1, '2021-06-22', 2, 15000, 15000, 'xxx', 'xxx', 'xxx', '2021-06-22 07:27:51', '2021-06-22 07:28:09'),
	(11, 1, 1, '2021-06-22', 10, 15000, 100000, 'aaa', 'aaaa', 'aaaa', '2021-06-22 15:57:02', '2021-06-22 15:57:02'),
	(12, 1, 1, '2021-06-22', 10, 15000, 150000, 'vv', 'vv', 'vv', '2021-06-22 16:02:34', '2021-06-22 16:57:42'),
	(13, 1, 1, '2021-06-22', 1, 15000, 15000, '-', '-', '-', '2021-06-22 16:56:43', '2021-06-22 16:56:43');
/*!40000 ALTER TABLE `penjualans` ENABLE KEYS */;

-- Dumping structure for table tutoko.produksis
CREATE TABLE IF NOT EXISTS `produksis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_id` int(11) NOT NULL DEFAULT 0,
  `pegawai_id` int(11) NOT NULL DEFAULT 0,
  `produksi_tanggal` date DEFAULT NULL,
  `produksi_jumlah` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.produksis: 2 rows
/*!40000 ALTER TABLE `produksis` DISABLE KEYS */;
INSERT INTO `produksis` (`id`, `barang_id`, `pegawai_id`, `produksi_tanggal`, `produksi_jumlah`, `created_at`, `updated_at`) VALUES
	(1, 2, 1, '2021-05-31', 2, '2021-05-31 21:37:28', '2021-05-31 22:48:49'),
	(2, 2, 1, '2021-06-01', 5, '2021-06-01 00:14:28', '2021-06-01 00:14:28');
/*!40000 ALTER TABLE `produksis` ENABLE KEYS */;

-- Dumping structure for table tutoko.suppliers
CREATE TABLE IF NOT EXISTS `suppliers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier_nama` varchar(50) NOT NULL,
  `supplier_phone` varchar(50) DEFAULT NULL,
  `supplier_alamat` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutoko.suppliers: 4 rows
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` (`id`, `supplier_nama`, `supplier_phone`, `supplier_alamat`, `created_at`, `updated_at`) VALUES
	(1, 'cv gajah duduk', '0000', 'kalasan indo', '2021-05-31 14:39:48', '2021-06-21 03:57:22'),
	(2, 'maju jaya', '45645', 'playen gunungkidul', '2021-06-13 14:21:19', '2021-06-13 14:21:19'),
	(3, 'tutoko', '098778900987', 'ponjong', '2021-06-17 11:48:44', '2021-06-17 11:48:56'),
	(4, 'tejoss', '098777', 'urusss', '2021-06-21 04:04:38', '2021-06-21 04:04:49');
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;

-- Dumping structure for table tutoko.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(225) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `telp` varchar(20) NOT NULL DEFAULT '',
  `alamat` varchar(50) NOT NULL DEFAULT '',
  `role` varchar(50) NOT NULL DEFAULT 'admin',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=179 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.users: 1 rows
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `email`, `password`, `fullname`, `telp`, `alamat`, `role`, `created_at`, `updated_at`) VALUES
	(1, 'admin@admin.com', '$2y$10$8T9ndyF0KNeqVzPo4rutoOq29oUMm9hs8d2U429tUoq0HO1gPh2D6', 'suroto', '098778900987', 'ponjong', 'admin', '2020-12-06 19:16:43', '2021-06-02 09:22:46');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for trigger tutoko.AFTER_INSERT_PEMBELIAN
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AFTER_INSERT_PEMBELIAN` AFTER INSERT ON `pembelians` FOR EACH ROW BEGIN
  IF NEW.jumlah > 0 THEN 
  	 	UPDATE barangs SET barang_stok = barang_stok + NEW.jumlah
   	WHERE id = new.barang_id;
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for trigger tutoko.AFTER_INSERT_PENJUALAN
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AFTER_INSERT_PENJUALAN` AFTER INSERT ON `penjualans` FOR EACH ROW BEGIN
  IF NEW.jumlah > 0 THEN 
  	 	UPDATE barangs SET barang_stok = barang_stok - NEW.jumlah
   	WHERE id = NEW.barang_id;
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for trigger tutoko.AFTER_INSERT_PRODUKSI
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AFTER_INSERT_PRODUKSI` AFTER INSERT ON `produksis` FOR EACH ROW BEGIN
  IF NEW.produksi_jumlah > 0 THEN 
  	 	UPDATE barangs SET barang_stok = barang_stok + NEW.produksi_jumlah
   	WHERE id = NEW.barang_id;
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for view tutoko.detail_invoice_keluar
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_invoice_keluar`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_invoice_keluar` AS SELECT p.*,b.barang_nama,b.barang_stok,b.barang_satuan,
p.payment - (p.jumlah * p.harga_jual) AS tagihan
FROM invoice_keluars i
LEFT JOIN penjualans p ON i.penjualan_id=p.id
LEFT JOIN barangs b ON b.id = p.barang_id ;

-- Dumping structure for view tutoko.detail_invoice_masuk
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_invoice_masuk`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_invoice_masuk` AS SELECT p.*,b.barang_nama,b.barang_stok,b.barang_satuan,s.supplier_nama,
p.payment - (p.harga_beli * p.jumlah) AS tagihan,u.fullname
FROM invoice_masuks i
LEFT JOIN pembelians p ON i.pembelian_id=p.id
LEFT JOIN barangs b ON p.barang_id=b.id
LEFT JOIN suppliers s ON p.supplier_id=s.id
LEFT JOIN users u ON p.user_id=u.id

#UPDATE barang SET barang_stok = 10 WHERE barang_id = 2 ;

-- Dumping structure for view tutoko.detail_pembelian
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_pembelian`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_pembelian` AS SELECT s.supplier_nama,s.supplier_phone,s.supplier_alamat,b.barang_nama,b.barang_stok,b.barang_satuan,b.barang_tipe,b.photo,b.active,p.*,
(p.jumlah * p.harga_beli) - p.payment AS tagihan
FROM pembelians p
LEFT JOIN suppliers s ON p.supplier_id=s.id
LEFT JOIN barangs b ON p.barang_id=b.id
ORDER BY p.id DESC ;

-- Dumping structure for view tutoko.detail_penjualan
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_penjualan`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_penjualan` AS SELECT b.barang_nama,b.barang_stok,b.barang_satuan,b.barang_tipe,b.photo,b.active,p.*,
(p.jumlah * p.harga_jual) - p.payment AS tagihan
FROM penjualans p
LEFT JOIN barangs b ON p.barang_id=b.id
ORDER BY p.id DESC ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
