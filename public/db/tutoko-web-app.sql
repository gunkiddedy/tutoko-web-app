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
	(1, 'semen holcims', 3, 'sak', 'Supplier', 'images/Capture-817.JPG', 'Active', '2021-06-13 03:02:10', '2021-06-13 14:42:42'),
	(2, 'batu bata', 0, 'biji', 'Mandiri', 'images/prenjak_lumut-432.JPG', 'Active', '2021-06-13 03:02:47', '2021-06-13 12:53:59');
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
	`updated_at` TIMESTAMP NOT NULL
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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.pegawais: 1 rows
/*!40000 ALTER TABLE `pegawais` DISABLE KEYS */;
INSERT INTO `pegawais` (`id`, `pegawai_nama`, `pegawai_phone`, `pegawai_alamat`, `created_at`, `updated_at`) VALUES
	(1, 'larno', '9879876454', 'ponjong', '2021-05-31 21:38:01', '2021-05-31 21:38:04');
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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.pembelians: 2 rows
/*!40000 ALTER TABLE `pembelians` DISABLE KEYS */;
INSERT INTO `pembelians` (`id`, `user_id`, `supplier_id`, `barang_id`, `tanggal`, `jumlah`, `harga_beli`, `payment`, `harga_jual_standar`, `harga_jual_grosir`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, 1, '2021-06-13', 2, 1000, 5000, 10000, 8000, '2021-06-13 05:54:53', '2021-06-13 07:42:42'),
	(3, 1, 2, 1, '0000-00-00', 1, 1234, 1223, 2, 1321, '2021-06-13 07:26:42', '2021-06-13 07:42:27');
/*!40000 ALTER TABLE `pembelians` ENABLE KEYS */;

-- Dumping structure for table tutoko.penjualans
CREATE TABLE IF NOT EXISTS `penjualans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT 0,
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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table tutoko.penjualans: 0 rows
/*!40000 ALTER TABLE `penjualans` DISABLE KEYS */;
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
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutoko.suppliers: 2 rows
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` (`id`, `supplier_nama`, `supplier_phone`, `supplier_alamat`, `created_at`, `updated_at`) VALUES
	(1, 'cv gajah tunggal', '0989', 'kalasan sleman yogyakarta', '2021-05-31 14:39:48', '2021-06-01 09:57:49'),
	(2, 'maju jaya', '45645', 'playen gunungkidul', '2021-06-13 14:21:19', '2021-06-13 14:21:19');
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

-- Dumping structure for trigger tutoko.AFTER_UPDATE_PEMBELIAN
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AFTER_UPDATE_PEMBELIAN` AFTER UPDATE ON `pembelians` FOR EACH ROW BEGIN
	IF NEW.jumlah > OLD.jumlah THEN 
  	 	UPDATE barangs SET barang_stok = barang_stok + (NEW.jumlah - OLD.jumlah)
  		WHERE id = new.barang_id;
  	ELSEIF NEW.jumlah < OLD.jumlah THEN
  		UPDATE barangs SET barang_stok = barang_stok - (OLD.jumlah - NEW.jumlah)
  		WHERE id = new.barang_id;
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
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `detail_pembelian` AS SELECT s.supplier_nama,s.supplier_phone,s.supplier_alamat,b.barang_nama,b.barang_stok,b.barang_satuan,b.barang_tipe,b.photo,b.active,p.*
FROM pembelians p
LEFT JOIN suppliers s ON p.supplier_id=s.id
LEFT JOIN barangs b ON p.barang_id=b.id ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
