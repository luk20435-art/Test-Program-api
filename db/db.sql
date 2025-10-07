-- MySQL dump 10.13  Distrib 8.0.42, for macos15 (arm64)
--
-- Host: 127.0.0.1    Database: erp_organization
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `allocations`
--

LOCK TABLES `allocations` WRITE;
/*!40000 ALTER TABLE `allocations` DISABLE KEYS */;
/*!40000 ALTER TABLE `allocations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `budgets`
--

LOCK TABLES `budgets` WRITE;
/*!40000 ALTER TABLE `budgets` DISABLE KEYS */;
INSERT INTO `budgets` VALUES ('108d0177-939d-4dc3-bc1d-cdde66c4c52e',2025,10433.24,'2d91ef33-fcf7-4d7c-8e69-3862610cde41',3,'ค่าไฟ และค่าน้ำ 44','2025-10-07'),('6cec1328-4d4b-463a-b626-2b16852af593',2025,20433.00,'83e4f5a3-5d6b-4ace-ab6d-7693c1f56c51',3,'ค่าไฟ และค่าน้ำ 23','2025-10-07'),('8a65b664-3e4a-45d2-a014-cb602cbe94e3',2025,30433.00,'2d91ef33-fcf7-4d7c-8e69-3862610cde41',1,'ค่าไฟ และค่าน้ำ 1','2025-10-07');
/*!40000 ALTER TABLE `budgets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cost_categories`
--

LOCK TABLES `cost_categories` WRITE;
/*!40000 ALTER TABLE `cost_categories` DISABLE KEYS */;
INSERT INTO `cost_categories` VALUES (1,'ค่าน้ำ-ไฟ้','direct'),(2,'ค่าจ้างพนักงาน','direct'),(3,'ค่าใช้จ่ายอื่นๆ','indirect');
/*!40000 ALTER TABLE `cost_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES ('2d91ef33-fcf7-4d7c-8e69-3862610cde41','แผนกวิศวะกร'),('5ee55412-67a1-4b83-919c-bc3d79e5d874','แผนกตรวจสอบคุณภาพ'),('83e4f5a3-5d6b-4ace-ab6d-7693c1f56c51','แผนกปฏิบัติการ'),('8e8241e1-23ad-4d21-978a-7633fe9ef8db','แผนกทําสี'),('d9737072-84c0-4566-8ba5-4ab4d05d01fe','บัญชี'),('f79b5d00-9b67-4c89-bc13-cbcdc0853f54','แผนกจัดซือ');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('5b40b52a-5323-4fba-ba16-2510a86fdf63','admin@gmail.com','$2b$10$lLGU4UQ.3rnFE0/v5ziPfeuIy5ZrAFqiFfSe5AgGml3LtSatZKn5a','admin admin','admin','2025-10-06 13:48:37.098128','d9737072-84c0-4566-8ba5-4ab4d05d01fe');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-08  1:06:36
