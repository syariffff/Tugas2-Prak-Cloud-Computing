-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2025 at 03:20 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tugas_note`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `isi` varchar(255) DEFAULT NULL,
  `kategori` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `judul`, `isi`, `kategori`, `createdAt`, `updatedAt`) VALUES
(1, 'Daftar Dosa Ayyash', 'Menjadi Beban Kelompok\nTidak Membantu Mengerjakan Tugas\nKalah Magic Chess Mulu\nMokel', 'Pribadi', '2025-03-04 14:13:04', '2025-03-04 14:17:43'),
(2, 'Daftar Tugas', 'Prak CC\nMobile\nPakar', 'Pendidikan', '2025-03-04 14:13:21', '2025-03-04 14:13:21'),
(3, 'Pengeluaran Februari', 'Kost 550.000\nMakan 1.500.000\nParfum 550.000', 'Keuangan', '2025-03-04 14:13:56', '2025-03-04 14:13:56'),
(5, 'Daftar Takjil Gratis Updated', 'Nasi uduk masjid amal mulia\nDimsum mentai jogokarian\nKue pancong \nPisang kemul\n', 'Pribadi', '2025-03-04 14:16:38', '2025-03-04 14:17:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
