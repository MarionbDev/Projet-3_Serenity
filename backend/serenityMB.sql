-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: serenityMB
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `maiden_name` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `sexe` enum('Masculin','Féminin') DEFAULT NULL,
  `title` enum('Sans','Mademoiselle','Madame','Monsieur') DEFAULT NULL,
  `family_situation` enum('Marié(e)','Pacsé(e)','Célibataire','Séparé(e)','Veuf(ve)','Divorcé(e)') DEFAULT NULL,
  `professionnal_situation` enum('Agriculteur exploitant','Artisan/Commerçant/Chef d''entreprise','Cadre/Professions intellectuelles supérieures','Profession intermédiaire','Employé','Ouvrier','Retraité','Sans activité') DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `number_of_children` tinyint DEFAULT NULL,
  `road` varchar(100) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `zip_code` int DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `tel_fixe` varchar(50) DEFAULT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tel_portable` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Aphone','Bénédicte',NULL,NULL,'1965-05-10','Féminin','Madame','Marié(e)','Employé','Traductrice',2,'8 rue de la presse','France',75000,'Paris','01 24 35 48 51','aphone_benedicte@gmail.com','aphben',NULL),(2,'Power','Agathe',NULL,NULL,'1981-11-25','Féminin','Mademoiselle','Célibataire','Employé','Journaliste',0,'25 rue de la République','France',34000,'Montpellier','04 67 51 01 94','agathe_power@gmail.com','agathepow',NULL),(3,'Sung','Sam',NULL,NULL,'1995-01-08','Masculin','Monsieur','Pacsé(e)','Artisan/Commerçant/Chef d\'entreprise','Directeur',0,'8 rue de la Paix','France',34000,'Montpellier','04 67 48 21 51','sam_sung@gmail.com','samsung',NULL);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-05 10:31:11
