-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: serenitybl
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.23.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Profesionnel`
--

DROP TABLE IF EXISTS `Profesionnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Profesionnel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `speciality` varchar(100) NOT NULL,
  `road` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `zip_code` int NOT NULL,
  `country` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profesionnel`
--

LOCK TABLES `Profesionnel` WRITE;
/*!40000 ALTER TABLE `Profesionnel` DISABLE KEYS */;
INSERT INTO `Profesionnel` VALUES (1,'Jean-Claude','BYZAR','0556303254','https://thumbs.dreamstime.com/z/m%C3%A9decin-g%C3%A9n%C3%A9raliste-40482496.jpg','Psychologue','rue Général Leclerc','Bordeaux',33000,'FRANCE'),(2,'Céline','BOITEUX','0556329475','https://thumbs.dreamstime.com/z/m%C3%A9decin-g%C3%A9n%C3%A9raliste-40482496.jpg','Kinésithérapeute','rue Louis Pasteur','Bordeaux',33000,'FRANCE'),(3,'Patrice','CONTENT','0556647512','https://thumbs.dreamstime.com/z/m%C3%A9decin-g%C3%A9n%C3%A9raliste-40482496.jpg','Infirmier','rue Jules Ferry','Bordeaux',33000,'FRANCE');
/*!40000 ALTER TABLE `Profesionnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Protocol`
--

DROP TABLE IF EXISTS `Protocol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Protocol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Protocol`
--

LOCK TABLES `Protocol` WRITE;
/*!40000 ALTER TABLE `Protocol` DISABLE KEYS */;
INSERT INTO `Protocol` VALUES (1,'opération du ménisque','Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'),(2,'appendicectomie','Neque porro quisquam est qui dolorem ipsum quia dolor sit amet');
/*!40000 ALTER TABLE `Protocol` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-05 10:40:30
