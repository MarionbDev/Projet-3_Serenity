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
INSERT INTO `content` VALUES (1,'tout comprendre sur l\'opération du ménisque','video','00:20:00','Lorem ipsum dolor sit amet.','https://www.ortho-7.fr/fr/article/video-arthroscopie-du-genou-pour-lesion-meniscale-7.html',NULL,'compréhension',1),(2,'La douche bétadinée','image',NULL,'Lorem ipsum dolor sit amet.','https://www.pourquoidonc.com/wp-content/uploads/2021/01/Femme-blonde-sous-la-douche.jpg',1,'préparation',1),(3,'tout comprendre sur l\'opération du coude','video','00:27:30','Lorem ipsum dolor sit amet.','https://www.ortho-7.fr/fr/article/video-arthroscopie-du-genou-pour-lesion-meniscale-7.html',NULL,'compréhension',1),(4,'tout comprendre sur l\'opération de la vésicule biliaire','image',NULL,'Lorem ipsum dolor sit amet.','https://www.ortho-7.fr/fr/article/video-arthroscopie-du-genou-pour-lesion-meniscale-7.html',NULL,'compréhension',2),(5,'tout comprendre sur l\'opération de la colonne vertébrale','video','00:38:10','Lorem ipsum dolor sit amet.','https://www.ortho-7.fr/fr/article/video-arthroscopie-du-genou-pour-lesion-meniscale-7.html',NULL,'compréhension',1),(6,'La douche c\'est super','image',NULL,'Lorem ipsum dolor sit amet.','https://www.pourquoidonc.com/wp-content/uploads/2021/01/Femme-blonde-sous-la-douche.jpg',2,'préparation',2),(7,'se raser le corps avant son opération','image',NULL,'Lorem ipsum dolor sit amet.','https://www.pourquoidonc.com/wp-content/uploads/2021/01/Femme-blonde-sous-la-douche.jpg',3,'préparation',2),(8,'La chedou bétadinée','image',NULL,'Lorem ipsum dolor sit amet.','https://www.pourquoidonc.com/wp-content/uploads/2021/01/Femme-blonde-sous-la-douche.jpg',4,'préparation',2),(9,'La bétadine','image',NULL,'Lorem ipsum dolor sit amet.','https://www.pourquoidonc.com/wp-content/uploads/2021/01/Femme-blonde-sous-la-douche.jpg',2,'préparation',2),(10,'tout comprendre sur mon ablation du testicule droit','image',NULL,'Lorem ipsum dolor sit amet.','https://www.ortho-7.fr/fr/article/video-arthroscopie-du-genou-pour-lesion-meniscale-7.html',NULL,'compréhension',1),(11,'tout comprendre ma greffe de coeur de singe','image',NULL,'Lorem ipsum dolor sit amet.','https://www.ortho-7.fr/fr/article/video-arthroscopie-du-genou-pour-lesion-meniscale-7.html',NULL,'compréhension',1);
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'John','Doe','01 23 45 67 89','john.doe@example.com','$argon2id$v=19$m=65536,t=5,p=1$6Yv5uq3LwHz50GQ00QFSFA$rGaCRdU5QmUOV3k1Zu/Qqh42BpG5N2ZyUf+xiq3T1VM','profile1.jpg','English','Lorem ipsum dolor sit amet.','Certificate of Excellence','Praticien','Advanced Training in Pediatrics','10 years of experience in medical practice','Collaboration with local hospitals','Published articles in medical journals','Recipient of Best Doctor Award'),(2,'Jane','Smith','06 12 34 56 78','jane.smith@example.com','$argon2id$v=19$m=65536,t=5,p=1$QaOfUCFgvVFM2zaFZhZDtQ$5WRHuAKaz8WOaE5e1A8i03isLVZGI7CfoDD3wL5D/Cg','profile2.jpg','French','Lorem ipsum dolor sit amet.','Board Certification in Dermatology','Praticien','Dermatology Fellowship','15 years of experience in dermatology','Partnership with cosmetic clinics','Presentations at international conferences','Recipient of Dermatology Excellence Award'),(3,'Michael','Nerisson','02 98 76 54 32','michael.nerisson@example.com','$argon2id$v=19$m=65536,t=5,p=1$ZVAAxI9Zb6sEEFKoVMAWuw$eN6qD95/a+DLWBLZn09RkCYQq4P/APw46QymEhi5N/c','profile3.jpg','Spanish','Lorem ipsum dolor sit amet.','Advanced Cardiac Life Support (ACLS) Certification','Admin',NULL,NULL,NULL,NULL,NULL),(4,'Céline','Boiteux','05 40 40 40 40','celineboiteux@example.com','$argon2id$v=19$m=65536,t=5,p=1$CkZ0pELjzI991hLTQGSkVQ$j+Zfz/2yiew51tT7ThxYg5bsBaLyPcePsrP9hwC7jhQ',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(5,'Guy','Poisson','05 50 50 50 50','guypoisson@example.com','$argon2id$v=19$m=65536,t=5,p=1$gT8QVuGOpyfQo0ojkVCcyQ$q1xyIedc99rGoaYi221HiEmPI614N7Tk7ZBvXJ/ZzF4',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(6,'Roselyne','bargeot','04 30 30 30 30','roselynebargeot@example.com','$argon2id$v=19$m=65536,t=5,p=1$HgvVTQMRpY/hV0DrP5hJnA$A48rTrxtd1zECjlsFg3L3HeDPXqExDJF335RHMKLPMM',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(7,'Josiane','Tiremoiloss','02 20 20 30 20','josianetiremoiloss@example.com','$argon2id$v=19$m=65536,t=5,p=1$M0p9+kLTxIASpuXb6KndCw$GHAdYh4TQT9vpOmXMJ8B8ReC1qT8WCM8cLlc2Eubt9E',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(8,'Françoise','Bizar','01 10 10 10 10','francoisebizar@example.com','$argon2id$v=19$m=65536,t=5,p=1$VzrhLKsOo91yLUNnRN7R4g$ockAFNg7Qjb6bXSuFQhNZCz8ouJm/zuUjWUOdgjOBTw',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(9,'Annabelle','Motif','01 80 80 80 80','annabellemotif@example.com','$argon2id$v=19$m=65536,t=5,p=1$ivJSfbxsAFc8IbM4k58+wA$SRhae2Qj6d9YZz8Q//Vry34BEqyPJ2on2bVWknjJPQo',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(10,'Patrice','Content','01 90 90 90 90','patricecontent@example.com','$argon2id$v=19$m=65536,t=5,p=1$3/ITWZZ+jr/AuxisvNe2vw$ctlkjVnXaL9fGyGE2/7e3BdRm35goXnec8IS6eZvSGA',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(11,'Didier','Morose','01 12 12 12 91','didiermorose@example.com','$argon2id$v=19$m=65536,t=5,p=1$uov/rjtahxtA/zeQXZrfDw$IwlW81i3IXYCUQd6YeW+6l26Ih9SuCq3GNvmxxkWC/I',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(12,'Jean-Pierre','Majax','01 21 21 21 21','jpmajax@example.com','$argon2id$v=19$m=65536,t=5,p=1$LroCZtBTP+EorFppgk7kng$YLm6sN5i52ye6DJKiHV558BdDJkTg2hA8B1KvhrTS9U',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(13,'Nicole','Tchatche','01 32 32 32 32','nicoletchatche@example.com','$argon2id$v=19$m=65536,t=5,p=1$y4cd0jphxM7K4wJ55Qp9cg$c6g7O/uD2amoBCtb9EWmRpAxTx+x2+6YU9rG9VqYbxU',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(14,'Fernand','Tibio','03 54 54 54 54','fernandtitio@example.com','$argon2id$v=19$m=65536,t=5,p=1$HBQk1DO3EuvbLILxBnYoZA$xFlxTsbLLfVbOSK85Yy+E3vdqsMVxc5SRKOT4If/YsM',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(15,'Stéphane','Piquemal','03 55 55 55 55','stephanepiquemal@example.com','$argon2id$v=19$m=65536,t=5,p=1$4OtV1WZRDI8B1PwYJzwnZw$UNvckLpP13CuHiSYtvJr2MyJkqCBTVTRGG54E4kL0j4',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(16,'Hervé','Sature','03 66 66 66 66','hervesature@example.com','$argon2id$v=19$m=65536,t=5,p=1$kmIB19285sfryFt5eYjEkA$Yi6zuIsYxjx4LPYbLc6Z9ZMCns8jvy2mdnNl4Jsx7TU',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL),(17,'Manon','Méhoui','03 77 77 77 77','manonmehoui@example.com','$argon2id$v=19$m=65536,t=5,p=1$/vBSoc7XjQSbKETBkX/I2g$kv+uryIoEXRYNICJxmOxIA8BdaDyb8d7+GAzgCsMxFI',NULL,NULL,NULL,NULL,'Praticien',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `intervention`
--

LOCK TABLES `intervention` WRITE;
/*!40000 ALTER TABLE `intervention` DISABLE KEYS */;
INSERT INTO `intervention` VALUES (6,'2024-10-16 15:59:00',6,4),(7,'2023-10-16 15:59:00',7,1);
/*!40000 ALTER TABLE `intervention` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Aphone','Bénédicte',NULL,NULL,'1965-05-10','Féminin','Madame','Marié(e)','Employé','Traductrice',2,'8 rue de la presse','France',75000,'Paris','01 24 35 48 51','aphone_benedicte@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$PGjFdcHVul8M+yRIuVMZcw$+R7Jhq1xeq5tVfOOr1f1mKwZqQbxoNvEx4kMNb/tYSA',NULL),(2,'Power','Agathe',NULL,NULL,'1981-11-25','Féminin','Mademoiselle','Célibataire','Employé','Journaliste',0,'25 rue de la République','France',34000,'Montpellier','04 67 51 01 94','agathe_power@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$k3NgGd1KxoojiPKUGi7LNQ$izHd5oKg86A9pPYOIkBuZnWNRFe1gUImwkoPVwZ8hEc',NULL),(3,'Sung','Sam',NULL,NULL,'1995-01-08','Masculin','Monsieur','Pacsé(e)','Artisan/Commerçant/Chef d\'entreprise','Directeur',0,'8 rue de la Paix','France',34000,'Montpellier','04 67 48 21 51','sam_sung@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$RO4zX5kbn33o8jkcnvIu+A$Igl2Im/k84+g5745/V8GcpTX2xllTSLS+YMWEIIWCTw',NULL),(4,'Audo','Jémal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'jemalaudo@example.com','$argon2id$v=19$m=65536,t=5,p=1$Fk55a+4DRZslZ0Hq58K8Aw$8KBZESefIKwPs+I5CL8Lx65LwqKd60Yzg2PwPfkUg+c',NULL),(5,'Esteauma','Maud',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'maudesteauma@example.com','$argon2id$v=19$m=65536,t=5,p=1$ne6CGUDS2APIpCO+0RZQ5w$dm6ivLpuPsDg+BGL4a2wu6/w0o0S7ZWTZqEvfhW+8qg',NULL),(6,'Zeimer','Pascal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'pascalzeimer@example.com','$argon2id$v=19$m=65536,t=5,p=1$okOdf5BgqQgIQTQ5+nJjYw$PGy59NLV8Glob8Q7ZG/uarVdaBHkpGSLk8fzeGstgXQ',NULL),(7,'Ongation','Raphael',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'raphaelongation@example.com','$argon2id$v=19$m=65536,t=5,p=1$zxN598NLEGLbWPmt+gWYZw$klIRKCn/kW9QSWA3TkjSzLQOrQHcuVcZ0iw0d3UrNAc',NULL),(8,'Opathe','Jérémie',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'jeremieopathe@example.com','$argon2id$v=19$m=65536,t=5,p=1$Qsu6dsPvnH6qA7BqubKB2g$O2ssc+Ne0l2MWWs2a+/FvD572mdLmX+RdEt8VfTi6Ho',NULL),(9,'Ricel','Maéva',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'maevaricel@example.com','$argon2id$v=19$m=65536,t=5,p=1$5WnQ+HkJ+UXxKB4JuFP1YQ$PzQEWNzEsbhFUp8Jqy69eALJGEE1Q+f2vFqjLgrTKWo',NULL),(10,'Cluche','Jessico',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'jessicocluche@example.com','$argon2id$v=19$m=65536,t=5,p=1$UaDFM2eEBc+jtzZqxhYgxg$wLGqFJ0aOXMf2VQ4g2F0j7dFiEbcK+f9zAMZ6q48eNg',NULL),(11,'Trose','Bernard',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'bernardtrose@example.com','$argon2id$v=19$m=65536,t=5,p=1$Y3vXg9zK4BjMkN2XCerKmA$xYNJbkHNbu1P35mPkO+Uy5rvFT3RhGnvdBnQeFjPHuk',NULL),(12,'Graine','Noémie',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'noemiegraine@example.com','$argon2id$v=19$m=65536,t=5,p=1$/NzulJXLOX0kCYv5muUCuA$naGsZzlZfPcy8Al8B8Ul9c7Nz2JtnY0u1CYfIBbSoqg',NULL),(13,'Cause','Rémi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'remicause@example.com','$argon2id$v=19$m=65536,t=5,p=1$KT00VN08+FcBrBv1VtFlpA$LQzDQmghTOFhRwLr3WwvM7b4vNyyNWEfNotd4poTjfM',NULL),(14,'Stémie','Jessy',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'jessystemie@example.com','$argon2id$v=19$m=65536,t=5,p=1$+IGzkKmxlHI9S3W2qOLnwg$Z4o4q4SC7avMamDFjbNi82OVtWWSnIGqtCSXI8jQ6ks',NULL),(15,'Ongassion','Michel',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'michelongassion@example.com','$argon2id$v=19$m=65536,t=5,p=1$y2GbNdLtd0opoxdA3UvHfA$Pk2eP4AEJtGMIiBwbq74GWBjNQqtLSS6RnPedcbYa5I',NULL),(16,'Arret','Medhi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'medhiarret@example.com','$argon2id$v=19$m=65536,t=5,p=1$Vwm+MHWe3/ckNQcvr6522Q$VA6mRgiw9eyO/2ZVRcZky22/UdRkYybIY5eMwgCBNnc',NULL),(17,'Trite','Bernard',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'bernardtrite@example.com','$argon2id$v=19$m=65536,t=5,p=1$8VCKA1b3Hba+MR0Ny6B1JA$+QjfnGHMZ0uaD6jD0V86S1j8Ej9OW0kFyrytJ5RRSEY',NULL);
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
INSERT INTO `profesionnel` VALUES (1,'Jean-Claude','BYZAR','0556303254','https://thumbs.dreamstime.com/z/m%C3%A9decin-g%C3%A9n%C3%A9raliste-40482496.jpg','Psychologue','rue du grand Faubourg','Chartres',28000,48.442664,1.479060,'FRANCE'),(2,'Céline','BOITEUX','0556329475','https://thumbs.dreamstime.com/z/m%C3%A9decin-g%C3%A9n%C3%A9raliste-40482496.jpg','Kinésithérapeute','rue muret','chartres',28000,48.449062,1.486976,'FRANCE'),(3,'Patrice','CONTENT','0556647512','https://thumbs.dreamstime.com/z/m%C3%A9decin-g%C3%A9n%C3%A9raliste-40482496.jpg','Infirmier','rue de la république','Lucé',28110,48.441095,1.472325,'FRANCE');
/*!40000 ALTER TABLE `profesionnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `protocol`
--

LOCK TABLES `protocol` WRITE;
/*!40000 ALTER TABLE `protocol` DISABLE KEYS */;
INSERT INTO `protocol` VALUES (1,'Opération du ménisque','Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'),(2,'Appendicectomie','Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'),(4,'Opération de la cataracte','Neque porro quisquam est qui dolorem ipsum quia dolor sit amet');
/*!40000 ALTER TABLE `protocol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `surgery_type`
--

LOCK TABLES `surgery_type` WRITE;
/*!40000 ALTER TABLE `surgery_type` DISABLE KEYS */;
INSERT INTO `surgery_type` VALUES (1,'Elongation croisée du genoux',1,2),(2,'Thermocoagulation',2,3),(3,'Hystéroscopie',3,1),(4,'Opération cataracte',1,6),(5,'Elongation croisée du genoux',1,7);
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

-- Dump completed on 2023-06-21 14:54:34
