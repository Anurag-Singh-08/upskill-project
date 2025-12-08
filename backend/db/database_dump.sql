-- ============================================
-- UPSKILL TECH SOLUTION - COMPLETE DATABASE DUMP
-- Full Stack Assessment - Task No. 002
-- Export Date: $(date)
-- Database: upskill_db
-- ============================================

-- MySQL dump 10.13  Distrib 8.0.0, for Linux (x86_64)
--
-- Host: localhost    Database: upskill_db
-- ------------------------------------------------------
-- Server version	8.0.0

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
-- Create database
--

CREATE DATABASE IF NOT EXISTS `upskill_db`;
USE `upskill_db`;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `full_name` varchar(200) GENERATED ALWAYS AS (concat(`first_name`,' ',`last_name`)) STORED,
  `email` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `users_chk_1` CHECK ((length(`phone`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone`, `password`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES 
(1,'Admin','User','admin@example.com','9999999999','$2b$10$N9qo8uLOickgx2ZMRZoMy.MrqK8L3H.8bJYzJq7G8tJk4Q2vQ1YdC','2024-01-15 10:00:00','2024-01-15 10:00:00',1,1),
(2,'John','Doe','john.doe@example.com','9876543210','$2b$10$N9qo8uLOickgx2ZMRZoMy.MrqK8L3H.8bJYzJq7G8tJk4Q2vQ1YdC','2024-01-15 10:05:00','2024-01-15 10:05:00',1,1),
(3,'Jane','Smith','jane.smith@example.com','9876543211','$2b$10$N9qo8uLOickgx2ZMRZoMy.MrqK8L3H.8bJYzJq7G8tJk4Q2vQ1YdC','2024-01-15 10:10:00','2024-01-15 10:10:00',1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_contacts`
--

DROP TABLE IF EXISTS `user_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `contact_number` varchar(10) NOT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `note` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_contact` (`user_id`,`contact_number`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`),
  CONSTRAINT `user_contacts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_contacts_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `user_contacts_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `user_contacts_chk_1` CHECK ((length(`contact_number`) = 10))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_contacts`
--

LOCK TABLES `user_contacts` WRITE;
/*!40000 ALTER TABLE `user_contacts` DISABLE KEYS */;
INSERT INTO `user_contacts` (`id`, `user_id`, `contact_number`, `contact_email`, `note`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES 
(1,2,'9123456780','contact1@example.com','Business partner','2024-01-15 11:00:00','2024-01-15 11:00:00',2,2),
(2,2,'9123456781','contact2@example.com','Friend','2024-01-15 11:05:00','2024-01-15 11:05:00',2,2),
(3,2,'9123456782','contact3@example.com','Family','2024-01-15 11:10:00','2024-01-15 11:10:00',2,2),
(4,3,'9123456783','contact4@example.com','Colleague','2024-01-15 11:15:00','2024-01-15 11:15:00',3,3),
(5,3,'9123456784','contact5@example.com','Client','2024-01-15 11:20:00','2024-01-15 11:20:00',3,3);
/*!40000 ALTER TABLE `user_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_addresses`
--

DROP TABLE IF EXISTS `contact_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact_id` int NOT NULL,
  `address_line1` varchar(255) NOT NULL,
  `address_line2` varchar(255) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `pincode` varchar(10) NOT NULL,
  `country` varchar(100) NOT NULL DEFAULT 'India',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `contact_id` (`contact_id`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`),
  CONSTRAINT `contact_addresses_ibfk_1` FOREIGN KEY (`contact_id`) REFERENCES `user_contacts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `contact_addresses_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `contact_addresses_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_addresses`
--

LOCK TABLES `contact_addresses` WRITE;
/*!40000 ALTER TABLE `contact_addresses` DISABLE KEYS */;
INSERT INTO `contact_addresses` (`id`, `contact_id`, `address_line1`, `address_line2`, `city`, `state`, `pincode`, `country`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES 
(1,1,'123 Business Street','Suite 100','Mumbai','Maharashtra','400001','India','2024-01-15 12:00:00','2024-01-15 12:00:00',2,2),
(2,2,'456 Friendship Lane','Apt 202','Delhi','Delhi','110001','India','2024-01-15 12:05:00','2024-01-15 12:05:00',2,2),
(3,4,'789 Corporate Tower','Floor 15','Bangalore','Karnataka','560001','India','2024-01-15 12:10:00','2024-01-15 12:10:00',3,3);
/*!40000 ALTER TABLE `contact_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tasks`
--

DROP TABLE IF EXISTS `user_tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `contact_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `status` enum('pending','in-progress','completed') DEFAULT 'pending',
  `due_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `contact_id` (`contact_id`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`),
  CONSTRAINT `user_tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_tasks_ibfk_2` FOREIGN KEY (`contact_id`) REFERENCES `user_contacts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_tasks_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `user_tasks_ibfk_4` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tasks`
--

LOCK TABLES `user_tasks` WRITE;
/*!40000 ALTER TABLE `user_tasks` DISABLE KEYS */;
INSERT INTO `user_tasks` (`id`, `user_id`, `contact_id`, `title`, `description`, `status`, `due_date`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES 
(1,2,1,'Follow up on project','Discuss project timeline and deliverables','pending',DATE_ADD(CURDATE(), INTERVAL 7 DAY),'2024-01-15 13:00:00','2024-01-15 13:00:00',2,2),
(2,2,2,'Birthday wish','Call to wish happy birthday','completed',CURDATE(),'2024-01-15 13:05:00','2024-01-15 13:05:00',2,2),
(3,2,3,'Family gathering','Plan for weekend family meetup','in-progress',DATE_ADD(CURDATE(), INTERVAL 3 DAY),'2024-01-15 13:10:00','2024-01-15 13:10:00',2,2),
(4,3,4,'Client meeting','Present quarterly report','pending',DATE_ADD(CURDATE(), INTERVAL 5 DAY),'2024-01-15 13:15:00','2024-01-15 13:15:00',3,3),
(5,3,5,'Send proposal','Email the project proposal document','in-progress',DATE_ADD(CURDATE(), INTERVAL 2 DAY),'2024-01-15 13:20:00','2024-01-15 13:20:00',3,3);
/*!40000 ALTER TABLE `user_tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_logs`
--

DROP TABLE IF EXISTS `email_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `email_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `to_email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `sent_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_to_email` (`to_email`),
  KEY `idx_sent_at` (`sent_at`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_logs`
--

LOCK TABLES `email_logs` WRITE;
/*!40000 ALTER TABLE `email_logs` DISABLE KEYS */;
INSERT INTO `email_logs` (`id`, `to_email`, `subject`, `body`, `sent_at`) VALUES 
(1,'admin@example.com','Welcome to Upskill Tech Solution','Thank you for registering with us!','2024-01-15 10:00:00'),
(2,'john.doe@example.com','Task Reminder','You have a pending task due tomorrow.','2024-01-15 13:00:00'),
(3,'jane.smith@example.com','New Contact Added','A new contact has been added to your account.','2024-01-15 13:15:00');
/*!40000 ALTER TABLE `email_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Triggers for table `user_tasks`
--

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE='STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `before_task_insert` BEFORE INSERT ON `user_tasks` FOR EACH ROW BEGIN
    DECLARE contact_owner INT;
    
    SELECT user_id INTO contact_owner 
    FROM user_contacts 
    WHERE id = NEW.contact_id;
    
    IF contact_owner != NEW.user_id THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Contact does not belong to the specified user';
    END IF;
END */;;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
DELIMITER ;

--
-- Views
--

CREATE OR REPLACE VIEW `user_contacts_with_addresses` AS
SELECT 
    uc.id,
    uc.user_id,
    u.email as user_email,
    uc.contact_number,
    uc.contact_email,
    uc.note,
    ca.address_line1,
    ca.address_line2,
    ca.city,
    ca.state,
    ca.pincode,
    ca.country,
    uc.created_at,
    uc.updated_at
FROM user_contacts uc
LEFT JOIN users u ON uc.user_id = u.id
LEFT JOIN contact_addresses ca ON uc.id = ca.contact_id;

CREATE OR REPLACE VIEW `user_tasks_with_details` AS
SELECT 
    t.id,
    t.user_id,
    t.contact_id,
    uc.contact_number,
    uc.contact_email,
    t.title,
    t.description,
    t.status,
    t.due_date,
    t.created_at,
    t.updated_at,
    DATEDIFF(t.due_date, CURDATE()) as days_remaining
FROM user_tasks t
JOIN user_contacts uc ON t.contact_id = uc.id;

--
-- Stored Procedures
--

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE='STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 PROCEDURE `GetUserDashboardStats`(IN user_id_param INT)
BEGIN
    SELECT 
        (SELECT COUNT(*) FROM user_contacts WHERE user_id = user_id_param) as total_contacts,
        (SELECT COUNT(*) FROM user_tasks WHERE user_id = user_id_param) as total_tasks,
        (SELECT COUNT(*) FROM user_tasks WHERE user_id = user_id_param AND status = 'pending') as pending_tasks,
        (SELECT COUNT(*) FROM user_tasks WHERE user_id = user_id_param AND status = 'completed') as completed_tasks,
        (SELECT COUNT(*) FROM contact_addresses ca 
         JOIN user_contacts uc ON ca.contact_id = uc.id 
         WHERE uc.user_id = user_id_param) as addresses_count;
END */;;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
DELIMITER ;

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE='STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 PROCEDURE `LogEmail`(
    IN to_email_param VARCHAR(255),
    IN subject_param VARCHAR(255),
    IN body_param TEXT
)
BEGIN
    INSERT INTO email_logs (to_email, subject, body) 
    VALUES (to_email_param, subject_param, body_param);
END */;;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
DELIMITER ;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on $(date)
```IMPORTANT ```
/*One-line import command
mysql -u root -p < UPSKILL-PROJECT/backend/db/database_dump.sql*/