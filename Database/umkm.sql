-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2021 at 09:08 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `umkm`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(16) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refresh_token` varchar(255) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(2, 'guido aryasatya', 'guidoarya@gmail.com', '$2b$10$kXiKoZZmLG7pCeUZPiGAwe89YxZz/9mKiWniOy1/Tf6LlTWhMtMn.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoyLCJuYW1lIjoiZ3VpZG8gYXJ5YXNhdHlhIiwiZW1haWwiOiJndWlkb2FyeWFAZ21haWwuY29tIiwiaWF0IjoxNjQwMTYxNjcxLCJleHAiOjE2NDAyNDgwNzF9.9f72NIlCyCpPYqRcyuhyyhZKXuoOz8RgFYIkbPoWdz4', '2021-12-17 12:42:09', '2021-12-22 08:27:51');

-- --------------------------------------------------------

--
-- Table structure for table `tb_umkm`
--

CREATE TABLE `tb_umkm` (
  `id` int(11) NOT NULL,
  `nama_umkm` varchar(56) NOT NULL,
  `lokasi` varchar(56) NOT NULL,
  `kota` varchar(56) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `kategori` varchar(56) NOT NULL,
  `nomor_hp` varchar(16) NOT NULL,
  `jasa_produk` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(16) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nohp` varchar(16) NOT NULL,
  `kota` varchar(16) NOT NULL,
  `refresh_token` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `nohp`, `kota`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(7, 'Guido Aryasatya', 'guidoarya@gmail.com', '$2b$10$hDofWBCApLLtGL.Cum8SrOAPuwZaEyEhY0GaGSu0BALo59HTBMG.2', '08132320912', 'Bekasi', '', '2021-11-27', '2021-12-21'),
(14, 'wilan', 'wilan@gmail.com', '$2b$10$9QASBXPlsy1vRCMp5PDcPenCVEv.dnkWpUaaZGQqGWmyhdpwQE9WG', '08123123123', 'Denpasar', '', '2021-12-22', '2021-12-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_umkm`
--
ALTER TABLE `tb_umkm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_umkm`
--
ALTER TABLE `tb_umkm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
