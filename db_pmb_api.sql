-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2024 at 04:55 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pmb_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `dokumen`
--

CREATE TABLE `dokumen` (
  `dokumen_id` int(11) NOT NULL,
  `status_verifikasi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dokumen`
--

INSERT INTO `dokumen` (`dokumen_id`, `status_verifikasi`) VALUES
(1, 'Diterima'),
(3, 'Diterima'),
(4, 'Diterima');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `mahasiswa_id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `tgl_lahir` date NOT NULL,
  `alamat` text NOT NULL,
  `telepon` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pendidikan` varchar(255) NOT NULL,
  `prodi` varchar(255) NOT NULL,
  `dokumen` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`mahasiswa_id`, `nama`, `tgl_lahir`, `alamat`, `telepon`, `email`, `pendidikan`, `prodi`, `dokumen`) VALUES
(1, 'Praditasari D A', '2000-08-12', 'Permata Regency', '0882009889699', 'praditasari.dyah61@gmail.com', 'SMK', 'Teknik Informatika', 'berkas-praditasari.pdf'),
(3, 'Risya Putri Afifah', '2000-01-24', 'Petemon Barat XI A/07', '082334718378', 'afifahrisya@gmail.com', 'SMA', 'Teknik Elektro', 'berkas-risya-afifah.pdf'),
(4, 'Lembayung Gendhis Btari', '2001-07-22', 'Western Villge A3 no. 5', '081773928379', 'lembayungbtari@gmail.com', 'SMA', 'Psikolog', 'berkas-lembayung.pdf'),
(5, 'Alkan Ganendra', '1998-11-18', 'Dreaming Land BE-8', '085227321562', 'alkanganendra@gmail.com', 'SMK', 'Teknik Perairan', 'berkas-alkan-ganendra.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `seleksi`
--

CREATE TABLE `seleksi` (
  `seleksi_id` int(11) NOT NULL,
  `mahasiswa_id` int(11) NOT NULL,
  `status_seleksi` varchar(255) NOT NULL,
  `catatan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seleksi`
--

INSERT INTO `seleksi` (`seleksi_id`, `mahasiswa_id`, `status_seleksi`, `catatan`) VALUES
(1, 1, 'Diterima', 'Silahkan segera lakukan heregristrasi di kampus 1'),
(3, 4, 'Diterima', 'Silahkan segera lakukan heregristrasi di kampus 1'),
(4, 3, 'Ditolak', 'Mohon Maaf Anda Belum Lolos');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dokumen`
--
ALTER TABLE `dokumen`
  ADD PRIMARY KEY (`dokumen_id`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`mahasiswa_id`);

--
-- Indexes for table `seleksi`
--
ALTER TABLE `seleksi`
  ADD PRIMARY KEY (`seleksi_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dokumen`
--
ALTER TABLE `dokumen`
  MODIFY `dokumen_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `mahasiswa_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `seleksi`
--
ALTER TABLE `seleksi`
  MODIFY `seleksi_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
