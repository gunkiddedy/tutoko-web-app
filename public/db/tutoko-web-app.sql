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

-- Dumping structure for table tutoko.absensis
CREATE TABLE IF NOT EXISTS `absensis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pegawai_id` int(11) NOT NULL DEFAULT 0,
  `jam_kerja` double NOT NULL DEFAULT 0,
  `tanggal` date NOT NULL DEFAULT curdate(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.absensis: 10 rows
/*!40000 ALTER TABLE `absensis` DISABLE KEYS */;
INSERT INTO `absensis` (`id`, `pegawai_id`, `jam_kerja`, `tanggal`, `created_at`, `updated_at`) VALUES
	(1, 5, 1, '2021-06-26', '2021-06-26 19:23:38', '2021-06-26 19:23:38'),
	(2, 4, 1, '2021-06-26', '2021-06-26 19:23:38', '2021-06-26 19:23:38'),
	(3, 3, 1, '2021-06-26', '2021-06-26 19:23:38', '2021-06-26 19:23:38'),
	(4, 2, 1, '2021-06-26', '2021-06-26 19:23:38', '2021-06-26 19:23:38'),
	(5, 1, 1, '2021-06-26', '2021-06-26 19:23:38', '2021-06-26 19:23:38'),
	(6, 5, 1, '2021-07-01', '2021-07-01 05:54:41', '2021-07-01 05:54:41'),
	(7, 4, 0, '2021-07-01', '2021-07-01 05:54:41', '2021-07-01 05:54:41'),
	(8, 3, 1, '2021-07-01', '2021-07-01 05:54:41', '2021-07-01 05:54:41'),
	(9, 2, 1, '2021-07-01', '2021-07-01 05:54:41', '2021-07-01 05:54:41'),
	(10, 1, 0.5, '2021-07-01', '2021-07-01 05:54:41', '2021-07-01 05:54:41');
/*!40000 ALTER TABLE `absensis` ENABLE KEYS */;

-- Dumping structure for table tutoko.barangs
CREATE TABLE IF NOT EXISTS `barangs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_nama` varchar(50) DEFAULT NULL,
  `barang_stok` int(11) NOT NULL DEFAULT 0,
  `hpp` int(11) DEFAULT 0,
  `upah` int(11) DEFAULT 0,
  `hjs` int(11) DEFAULT 0,
  `hjg` int(11) DEFAULT 0,
  `barang_satuan` varchar(50) DEFAULT NULL,
  `barang_tipe` enum('Mandiri','Supplier') DEFAULT 'Supplier',
  `photo` varchar(225) DEFAULT NULL,
  `active` enum('Active','Inactive') DEFAULT 'Active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.barangs: 4 rows
/*!40000 ALTER TABLE `barangs` DISABLE KEYS */;
INSERT INTO `barangs` (`id`, `barang_nama`, `barang_stok`, `hpp`, `upah`, `hjs`, `hjg`, `barang_satuan`, `barang_tipe`, `photo`, `active`, `created_at`, `updated_at`) VALUES
	(1, 'bis beton', 1, 70000, 45000, 120000, 100000, 'biji', 'Mandiri', 'images/templateeditor-89991624725729.png', 'Active', '2021-06-26 16:41:05', '2021-06-27 00:20:47'),
	(2, 'semen holcims', 90, 0, 0, 0, 0, 'sak', 'Supplier', 'images/job-4123.jpeg', 'Active', '2021-06-26 16:49:23', '2021-07-01 11:35:58'),
	(3, 'batako', 150, 1200, 500, 2900, 2500, 'biji', 'Mandiri', 'images/WhatsApp Image 2021-04-13 at 23.29.41-4876.jpeg', 'Active', '2021-06-26 16:54:18', '2021-07-01 12:57:53'),
	(4, 'paku reng kayu', 199, 0, 0, 0, 0, 'kilo', 'Supplier', 'images/homepage-when-offline-2432.png', 'Active', '2021-07-01 04:38:00', '2021-07-01 11:43:52');
/*!40000 ALTER TABLE `barangs` ENABLE KEYS */;

-- Dumping structure for view tutoko.detail_absensi
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `detail_absensi` (
	`id` INT(11) NOT NULL,
	`pegawai_id` INT(11) NOT NULL,
	`jam_kerja` DOUBLE NOT NULL,
	`tanggal` DATE NOT NULL,
	`created_at` TIMESTAMP NOT NULL,
	`updated_at` TIMESTAMP NOT NULL,
	`pegawai_nama` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`gaji_harian` INT(11) NULL,
	`jumlah_gaji` DOUBLE NULL
) ENGINE=MyISAM;

-- Dumping structure for view tutoko.detail_gaji
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `detail_gaji` (
	`id` INT(11) NOT NULL,
	`tanggal` DATE NOT NULL,
	`jumlah_jam` DOUBLE NOT NULL,
	`nama_pegawai` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`total_gaji_harian` DOUBLE NULL,
	`gaji_borongan` BIGINT(21) NULL
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

-- Dumping structure for view tutoko.detail_produksi
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `detail_produksi` (
	`id` INT(11) NOT NULL,
	`barang_id` INT(11) NOT NULL,
	`produksi_tanggal` DATE NULL,
	`pegawai_id` INT(11) NOT NULL,
	`produksi_jumlah` INT(11) NULL,
	`hpp` INT(11) NULL,
	`upah` INT(11) NULL,
	`created_at` TIMESTAMP NOT NULL,
	`updated_at` TIMESTAMP NOT NULL,
	`pegawai_nama` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_nama` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_stok` INT(11) NULL,
	`barang_satuan` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`barang_tipe` ENUM('Mandiri','Supplier') NULL COLLATE 'utf8mb4_general_ci',
	`photo` VARCHAR(225) NULL COLLATE 'utf8mb4_general_ci',
	`active` ENUM('Active','Inactive') NULL COLLATE 'utf8mb4_general_ci',
	`total_upah` BIGINT(21) NULL
) ENGINE=MyISAM;

-- Dumping structure for table tutoko.pegawais
CREATE TABLE IF NOT EXISTS `pegawais` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pegawai_nama` varchar(50) NOT NULL,
  `pegawai_phone` varchar(50) DEFAULT NULL,
  `pegawai_alamat` varchar(50) DEFAULT NULL,
  `gaji_harian` int(11) DEFAULT 0,
  `active` enum('Active','Inactive') DEFAULT 'Active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.pegawais: 5 rows
/*!40000 ALTER TABLE `pegawais` DISABLE KEYS */;
INSERT INTO `pegawais` (`id`, `pegawai_nama`, `pegawai_phone`, `pegawai_alamat`, `gaji_harian`, `active`, `created_at`, `updated_at`) VALUES
	(1, 'janu', '9999999999', 'ponjong', 50000, 'Active', '2021-06-26 03:21:32', '2021-06-26 10:52:19'),
	(2, 'jono', '99999999', 'ponjong', 45000, 'Active', '2021-06-26 03:21:46', '2021-06-26 03:21:46'),
	(3, 'jini', '99999999', 'tegalrejo', 55000, 'Active', '2021-06-26 03:22:00', '2021-06-26 03:22:00'),
	(4, 'jena', '99999999', 'karangijo', 60000, 'Active', '2021-06-26 03:22:19', '2021-06-26 03:22:19'),
	(5, 'bedot', '99998888', 'sumber kidul', 70000, 'Active', '2021-06-26 03:22:36', '2021-06-26 03:22:36');
/*!40000 ALTER TABLE `pegawais` ENABLE KEYS */;

-- Dumping structure for table tutoko.pembelians
CREATE TABLE IF NOT EXISTS `pembelians` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT 1,
  `supplier_id` int(11) NOT NULL DEFAULT 0,
  `barang_id` int(11) NOT NULL DEFAULT 0,
  `tanggal` date DEFAULT curdate(),
  `jumlah` int(11) NOT NULL DEFAULT 0,
  `harga_beli` double NOT NULL DEFAULT 0 COMMENT 'harga beli satuan',
  `payment` double NOT NULL DEFAULT 0,
  `harga_jual_standar` double NOT NULL DEFAULT 0,
  `harga_jual_grosir` double NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.pembelians: 7 rows
/*!40000 ALTER TABLE `pembelians` DISABLE KEYS */;
INSERT INTO `pembelians` (`id`, `user_id`, `supplier_id`, `barang_id`, `tanggal`, `jumlah`, `harga_beli`, `payment`, `harga_jual_standar`, `harga_jual_grosir`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, 1, '2021-06-26', 1, 70000, 0, 120000, 100000, '2021-06-27 00:20:47', '2021-06-27 00:20:47'),
	(2, 1, 1, 3, '2021-06-26', 100, 1200, 0, 2500, 2300, '2021-06-27 00:23:24', '2021-06-27 00:23:24'),
	(3, 1, 1, 3, '2021-06-26', 10, 1200, 0, 2900, 2500, '2021-06-27 00:24:33', '2021-06-26 17:34:07'),
	(4, 1, 100001, 2, '2021-07-01', 100, 30000, 2000000, 40000, 35000, '2021-07-01 03:33:17', '2021-07-01 03:33:17'),
	(5, 1, 100001, 4, '2021-07-01', 100, 10000, 900000, 15000, 13000, '2021-07-01 04:40:44', '2021-07-01 04:40:44'),
	(6, 1, 100001, 4, '2021-07-01', 100, 10000, 1000000, 15500, 13500, '2021-07-01 04:43:52', '2021-07-01 04:43:52'),
	(7, 1, 1, 3, '2021-07-01', 50, 1200, 0, 2900, 2500, '2021-07-01 12:57:53', '2021-07-01 12:57:53');
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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.penjualans: 3 rows
/*!40000 ALTER TABLE `penjualans` DISABLE KEYS */;
INSERT INTO `penjualans` (`id`, `user_id`, `barang_id`, `tanggal`, `jumlah`, `harga_jual`, `payment`, `nama_pembeli`, `phone_pembeli`, `alamat_pembeli`, `created_at`, `updated_at`) VALUES
	(1, 1, 2, '2021-07-01', 10, 40000, 400000, '-', '-', '-', '2021-07-01 04:35:58', '2021-07-01 04:37:05'),
	(2, 1, 4, '2021-07-01', 1, 15000, 15000, '-', '-', '-', '2021-07-01 04:42:02', '2021-07-01 04:42:02'),
	(3, 1, 3, '2021-07-01', 10, 2500, 25000, '-', '-', '-', '2021-07-01 05:55:41', '2021-07-01 05:55:41');
/*!40000 ALTER TABLE `penjualans` ENABLE KEYS */;

-- Dumping structure for table tutoko.produksis
CREATE TABLE IF NOT EXISTS `produksis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_id` int(11) NOT NULL DEFAULT 0,
  `produksi_tanggal` date DEFAULT NULL,
  `pegawai_id` int(11) NOT NULL DEFAULT 0,
  `produksi_jumlah` int(11) DEFAULT 0,
  `hpp` int(11) DEFAULT 0,
  `upah` int(11) DEFAULT 0,
  `hjs` int(11) DEFAULT 0,
  `hjg` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.produksis: 4 rows
/*!40000 ALTER TABLE `produksis` DISABLE KEYS */;
INSERT INTO `produksis` (`id`, `barang_id`, `produksi_tanggal`, `pegawai_id`, `produksi_jumlah`, `hpp`, `upah`, `hjs`, `hjg`, `created_at`, `updated_at`) VALUES
	(1, 1, '2021-06-26', 5, 1, 70000, 45000, 120000, 100000, '2021-06-26 17:20:47', '2021-06-26 17:20:47'),
	(2, 3, '2021-06-26', 1, 100, 1200, 500, 2500, 2300, '2021-06-26 17:23:24', '2021-06-26 17:23:24'),
	(3, 3, '2021-06-26', 2, 10, 1200, 500, 2500, 2300, '2021-06-26 17:24:33', '2021-06-26 17:24:33'),
	(4, 3, '2021-07-01', 3, 50, 1200, 500, 2900, 2500, '2021-07-01 05:57:53', '2021-07-01 05:57:53');
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
) ENGINE=MyISAM AUTO_INCREMENT=100002 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutoko.suppliers: 2 rows
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` (`id`, `supplier_nama`, `supplier_phone`, `supplier_alamat`, `created_at`, `updated_at`) VALUES
	(1, 'tutoko beton', '098778900987', 'ponjong', '2021-06-17 11:48:44', '2021-06-26 02:38:58'),
	(100001, 'kurnia jaya', '0987', 'karangmojo', '2021-07-01 03:32:49', '2021-07-01 03:32:49');
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
  	 	#UPDATE barangs SET barang_stok = barang_stok + NEW.produksi_jumlah
   	#WHERE id = NEW.barang_id;
   	INSERT INTO pembelians(supplier_id,barang_id,tanggal,jumlah,harga_beli,payment,harga_jual_standar,harga_jual_grosir)
      VALUES(1, NEW.barang_id, NEW.produksi_tanggal, NEW.produksi_jumlah, NEW.hpp, 0, NEW.hjs, NEW.hjg);
  END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Dumping structure for view tutoko.detail_absensi
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_absensi`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_absensi` AS SELECT a.*,p.pegawai_nama,p.gaji_harian,(a.jam_kerja * p.gaji_harian) AS jumlah_gaji
FROM absensis a
LEFT JOIN pegawais p ON a.pegawai_id=p.id ;

-- Dumping structure for view tutoko.detail_gaji
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_gaji`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_gaji` AS SELECT a.id,a.tanggal,
a.jam_kerja AS jumlah_jam,
p.pegawai_nama AS nama_pegawai,(p.gaji_harian * a.jam_kerja) AS total_gaji_harian,
(pp.produksi_jumlah * pp.upah) AS gaji_borongan
FROM absensis a
LEFT JOIN pegawais p ON a.pegawai_id=p.id
LEFT JOIN produksis pp ON a.pegawai_id=pp.pegawai_id ;

-- Dumping structure for view tutoko.detail_pembelian
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_pembelian`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_pembelian` AS SELECT s.supplier_nama,s.supplier_phone,s.supplier_alamat,b.barang_nama,b.barang_stok,b.barang_satuan,b.barang_tipe,b.photo,b.active,p.*,
(p.jumlah * p.harga_beli) - p.payment AS tagihan
FROM pembelians p
LEFT JOIN suppliers s ON p.supplier_id=s.id
LEFT JOIN barangs b ON p.barang_id=b.id
#WHERE p.supplier_id > 1
ORDER BY p.id DESC ;

-- Dumping structure for view tutoko.detail_penjualan
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_penjualan`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_penjualan` AS SELECT b.barang_nama,b.barang_stok,b.barang_satuan,b.barang_tipe,b.photo,b.active,p.*,
(p.jumlah * p.harga_jual) - p.payment AS tagihan
FROM penjualans p
LEFT JOIN barangs b ON p.barang_id=b.id
ORDER BY p.id DESC ;

-- Dumping structure for view tutoko.detail_produksi
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `detail_produksi`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_produksi` AS SELECT p.*,w.pegawai_nama,b.barang_nama,b.barang_stok,b.barang_satuan,b.barang_tipe,b.photo,b.active,(p.produksi_jumlah * p.upah) AS total_upah
FROM produksis p
LEFT JOIN barangs b ON p.barang_id = b.id
LEFT JOIN pegawais w ON p.pegawai_id = w.id ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
