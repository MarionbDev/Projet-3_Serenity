-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: serenity
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
-- Table structure for table `checklist`
--

DROP TABLE IF EXISTS `checklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checklist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checklist`
--

LOCK TABLES `checklist` WRITE;
/*!40000 ALTER TABLE `checklist` DISABLE KEYS */;
/*!40000 ALTER TABLE `checklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `type` enum('image','video','text') NOT NULL,
  `timing` time DEFAULT NULL,
  `description` text NOT NULL,
  `source` varchar(255) NOT NULL,
  `step` int DEFAULT NULL,
  `category` enum('compréhension','administration','préparation') NOT NULL,
  `protocol_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_content_protocol` (`protocol_id`),
  CONSTRAINT `fk_content_protocol` FOREIGN KEY (`protocol_id`) REFERENCES `protocol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `bio` text,
  `certificate` varchar(255) DEFAULT NULL,
  `role` enum('Praticien','Admin') NOT NULL,
  `other_formation` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `partnership` varchar(255) DEFAULT NULL,
  `works_and_publication` varchar(255) DEFAULT NULL,
  `award_and_recognition` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intervention`
--

DROP TABLE IF EXISTS `intervention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intervention` (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` datetime NOT NULL,
  `patient_id` int NOT NULL,
  `protocol_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_intervention_patient` (`patient_id`),
  KEY `fk_intervention_protocol` (`protocol_id`),
  CONSTRAINT `fk_intervention_patient` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`),
  CONSTRAINT `fk_intervention_protocol` FOREIGN KEY (`protocol_id`) REFERENCES `protocol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intervention`
--

LOCK TABLES `intervention` WRITE;
/*!40000 ALTER TABLE `intervention` DISABLE KEYS */;
/*!40000 ALTER TABLE `intervention` ENABLE KEYS */;
UNLOCK TABLES;

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
  `birthday` text DEFAULT NULL,
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
  `hashedPassword` varchar(255) NOT NULL,
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
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `podcast`
--

DROP TABLE IF EXISTS `podcast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `podcast` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `format` enum('image','video','music') NOT NULL,
  `description` text NOT NULL,
  `source` varchar(255) NOT NULL,
  `doctor_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_podcast_doctor` (`doctor_id`),
  CONSTRAINT `fk_podcast_doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `podcast`
--

LOCK TABLES `podcast` WRITE;
/*!40000 ALTER TABLE `podcast` DISABLE KEYS */;
/*!40000 ALTER TABLE `podcast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesionnel`
--

DROP TABLE IF EXISTS `profesionnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesionnel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `speciality` enum('Psychologue','Kinésithérapeute','Infirmier') NOT NULL,
  `road` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `zip_code` int NOT NULL,
  `latitude` Decimal(8,6) NULL,
  `longitude` Decimal(9,6) NULL,
  `country` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesionnel`
--

LOCK TABLES `profesionnel` WRITE;
/*!40000 ALTER TABLE `profesionnel` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesionnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `protocol`
--

DROP TABLE IF EXISTS `protocol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `protocol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `protocol`
--

LOCK TABLES `protocol` WRITE;
/*!40000 ALTER TABLE `protocol` DISABLE KEYS */;
/*!40000 ALTER TABLE `protocol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `surgery_type`
--

DROP TABLE IF EXISTS `surgery_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `surgery_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `doctor_id` int NOT NULL,
  `intervention_id` int NULL,
  PRIMARY KEY (`id`),
  KEY `fk_surgery_type_doctor` (`doctor_id`),
  KEY `fk_surgery_type_intervention` (`intervention_id`),
  CONSTRAINT `fk_surgery_type_doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`),
  CONSTRAINT `fk_surgery_type_intervention` FOREIGN KEY (`intervention_id`) REFERENCES `intervention` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `surgery_type`
--

LOCK TABLES `surgery_type` WRITE;
/*!40000 ALTER TABLE `surgery_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `surgery_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--
-- Table structure for table `patient_content`
--

DROP TABLE IF EXISTS `patient_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mutual_file` varchar(255) DEFAULT NULL,
  `consent_file` varchar(255) DEFAULT NULL,
  `administrative_sheet_file` varchar(255) DEFAULT NULL,
  `patient_id` int NOT NULL,
  `intervention_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_patient_content_patient` (`patient_id`),
  KEY `fk_patient_content_intervention` (`intervention_id`),
  CONSTRAINT `fk_patient_content_patient` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`),
  CONSTRAINT `fk_patient_content_intervention` FOREIGN KEY (`intervention_id`) REFERENCES `intervention` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_content`
--

LOCK TABLES `patient_content` WRITE;
/*!40000 ALTER TABLE `patient_content` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_content` ENABLE KEYS */;
UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-05 14:31:02
