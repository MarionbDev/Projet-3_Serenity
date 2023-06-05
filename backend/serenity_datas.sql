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
-- Dumping data for table `checklist`
--

LOCK TABLES `checklist` WRITE;
/*!40000 ALTER TABLE `checklist` DISABLE KEYS */;
INSERT INTO `checklist` VALUES (1,'Apporter sa pièce d\'identité'),(2,'Consultation anesthésique'),(3,'Test COVID datant de moins de 3 jours');
/*!40000 ALTER TABLE `checklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` VALUES (1,'tout comprendre sur l\'opération du ménisque','video','00:20:00','Lorem ipsum dolor sit amet.','https://www.ortho-7.fr/fr/article/video-arthroscopie-du-genou-pour-lesion-meniscale-7.html',NULL,'compréhension',1),(2,'La douche bétadinée','image',NULL,'Lorem ipsum dolor sit amet.','https://www.pourquoidonc.com/wp-content/uploads/2021/01/Femme-blonde-sous-la-douche.jpg',1,'préparation',2);
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'John','Doe','01 23 45 67 89','john.doe@example.com','password123','profile1.jpg','English','Lorem ipsum dolor sit amet.','Certificate of Excellence','Praticien','Advanced Training in Pediatrics','10 years of experience in medical practice','Collaboration with local hospitals','Published articles in medical journals','Recipient of Best Doctor Award'),(2,'Jane','Smith','06 12 34 56 78','jane.smith@example.com','password456','profile2.jpg','French','Lorem ipsum dolor sit amet.','Board Certification in Dermatology','Praticien','Dermatology Fellowship','15 years of experience in dermatology','Partnership with cosmetic clinics','Presentations at international conferences','Recipient of Dermatology Excellence Award'),(3,'Michael','Nerisson','02 98 76 54 32','michael.nerisson@example.com','password789','profile3.jpg','Spanish','Lorem ipsum dolor sit amet.','Advanced Cardiac Life Support (ACLS) Certification','Admin',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `intervention`
--

LOCK TABLES `intervention` WRITE;
/*!40000 ALTER TABLE `intervention` DISABLE KEYS */;
INSERT INTO `intervention` VALUES (1,'2023-03-28 22:33:00',1,2),(2,'2032-02-29 22:31:00',2,1),(3,'2012-08-08 03:59:00',3,1);
/*!40000 ALTER TABLE `intervention` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Aphone','Bénédicte',NULL,NULL,'1965-05-10','Féminin','Madame','Marié(e)','Employé','Traductrice',2,'8 rue de la presse','France',75000,'Paris','01 24 35 48 51','aphone_benedicte@gmail.com','aphben',NULL),(2,'Power','Agathe',NULL,NULL,'1981-11-25','Féminin','Mademoiselle','Célibataire','Employé','Journaliste',0,'25 rue de la République','France',34000,'Montpellier','04 67 51 01 94','agathe_power@gmail.com','agathepow',NULL),(3,'Sung','Sam',NULL,NULL,'1995-01-08','Masculin','Monsieur','Pacsé(e)','Artisan/Commerçant/Chef d\'entreprise','Directeur',0,'8 rue de la Paix','France',34000,'Montpellier','04 67 48 21 51','sam_sung@gmail.com','samsung',NULL);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `podcast`
--

LOCK TABLES `podcast` WRITE;
/*!40000 ALTER TABLE `podcast` DISABLE KEYS */;
INSERT INTO `podcast` VALUES (1,'Podcast 1','image','Description du premier podcast','https://source-du-podcast1.com',2),(2,'Podcast 2','video','Description du deuxième podcast','https://source-du-podcast2.com',1),(3,'Podcast 3','music','Description du troisième podcast','https://source-du-podcast3.com',3);
/*!40000 ALTER TABLE `podcast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `profesionnel`
--

LOCK TABLES `profesionnel` WRITE;
/*!40000 ALTER TABLE `profesionnel` DISABLE KEYS */;
INSERT INTO `profesionnel` VALUES (1,'Jean-Claude','BYZAR','0556303254','https://thumbs.dreamstime.com/z/m%C3%A9decin-g%C3%A9n%C3%A9raliste-40482496.jpg','Psychologue','rue Général Leclerc','Bordeaux',33000,'FRANCE'),(2,'Céline','BOITEUX','0556329475','https://thumbs.dreamstime.com/z/m%C3%A9decin-g%C3%A9n%C3%A9raliste-40482496.jpg','Kinésithérapeute','rue Louis Pasteur','Bordeaux',33000,'FRANCE'),(3,'Patrice','CONTENT','0556647512','https://thumbs.dreamstime.com/z/m%C3%A9decin-g%C3%A9n%C3%A9raliste-40482496.jpg','Infirmier','rue Jules Ferry','Bordeaux',33000,'FRANCE');
/*!40000 ALTER TABLE `profesionnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `protocol`
--

LOCK TABLES `protocol` WRITE;
/*!40000 ALTER TABLE `protocol` DISABLE KEYS */;
INSERT INTO `protocol` VALUES (1,'opération du ménisque','Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'),(2,'appendicectomie','Neque porro quisquam est qui dolorem ipsum quia dolor sit amet');
/*!40000 ALTER TABLE `protocol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `surgery_type`
--

LOCK TABLES `surgery_type` WRITE;
/*!40000 ALTER TABLE `surgery_type` DISABLE KEYS */;
INSERT INTO `surgery_type` VALUES (1,'élongation croisée du genoux',1,2),(2,'Thermocoagulation',2,3),(3,'Hystéroscopie',3,1);
/*!40000 ALTER TABLE `surgery_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-05 15:10:59
