-- MySQL dump 10.13  Distrib 8.0.45, for Linux (x86_64)
--
-- Host: localhost    Database: valux
-- ------------------------------------------------------
-- Server version	8.0.45-0ubuntu0.22.04.1

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `image_url` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (5,'Outerwear',42,'https://imagescdn.pantaloons.com/img/app/product/1/1052114-15274485.jpg?auto=format&w=450'),(6,'Kintwear',28,'https://assets.ajio.com/medias/sys_master/root/20240624/sCEq/66794f4c6f60443f31924799/-473Wx593H-700122947-green-MODEL.jpg'),(7,'Footwear',36,'https://karamonline.com/media/catalog/product/cache/509850b11aa2210ac1d2c31fec93d22f/b/x/bxwb0186in_1.jpg'),(8,'Accessories',64,'https://img.magnific.com/premium-photo/fashion-women-stylish-accessories-outfit-composition-flat-lay-pink-pastel-background-table-with-copy-mock-up-space-women-clothing-shopping-sale-concept-top-view-overhead_878808-5629.jpg'),(9,'Bags',19,'https://tiimg.tistatic.com/fp/1/008/945/ladies-fashion-bags-435.jpg'),(10,'Innerwear',50,'https://ramrajcotton.in/cdn/shop/files/5_69cf0eb4-765c-473c-b32e-3becafb352c4.jpg?v=1765782289&width=1080');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `featured_products`
--

DROP TABLE IF EXISTS `featured_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `featured_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `reviews` int DEFAULT NULL,
  `image_url` text,
  `featured` tinyint(1) DEFAULT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `featured_products`
--

LOCK TABLES `featured_products` WRITE;
/*!40000 ALTER TABLE `featured_products` DISABLE KEYS */;
INSERT INTO `featured_products` VALUES (1,'Structured Jacket','$240',4.8,321,'/images/products/wool_overshirt.jpg',1,'Brushed merino - Camel'),(2,'Relaxed Coat','$280',4.7,220,'/images/products/merino_knit.png',0,NULL),(3,'Minimal Shirt','$160',4.9,183,'/images/products/linen_trousers.png',0,NULL),(4,'Luxury Knit','$210',4.8,112,'/images/products/canvas_tote.png',0,NULL),(5,'Silk Scarf','$210',4.2,200,'/images/products/silk_scarf.png',0,NULL);
/*!40000 ALTER TABLE `featured_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero_images`
--

DROP TABLE IF EXISTS `hero_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hero_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `image_url` text,
  `display_order` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero_images`
--

LOCK TABLES `hero_images` WRITE;
/*!40000 ALTER TABLE `hero_images` DISABLE KEYS */;
INSERT INTO `hero_images` VALUES (1,'The Linen Coat','Premium Collection','$320','/images/hero/hero1.png',1),(2,'Minimal Knitwear','Winter Essentials','$260','/images/hero/hero2.png',2),(3,'Classic Street Jacket','Modern Tailoring','$280','/images/hero/hero3.png',3),(4,'Soft Wool Layer','Editorial Select','$220','/images/hero/hero4.png',4),(5,'Luxury Neutral Fit','New Season','$390','/images/hero/hero5.png',5);
/*!40000 ALTER TABLE `hero_images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-24 11:33:12
