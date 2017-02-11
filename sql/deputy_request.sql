-- MySQL dump 10.13  Distrib 5.7.10, for osx10.10 (x86_64)
--
-- Host: localhost    Database: deputy_request
-- ------------------------------------------------------
-- Server version	5.6.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ci_sessions` (
  `id` varchar(128) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int(10) unsigned NOT NULL DEFAULT '0',
  `data` blob NOT NULL,
  KEY `ci_sessions_timestamp` (`timestamp`),
  KEY `id` (`id`),
  KEY `id_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ci_sessions`
--

LOCK TABLES `ci_sessions` WRITE;
/*!40000 ALTER TABLE `ci_sessions` DISABLE KEYS */;
INSERT INTO `ci_sessions` VALUES ('e6de89aaef3aebe15266389de7745e674024ecbf','127.0.0.1',1486591590,'__ci_last_regenerate|i:1486591590;'),('37b657c9cd0911a969f7b3f55002015f3222364e','127.0.0.1',1486591625,'__ci_last_regenerate|i:1486591590;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('f21d5a0ca9e96dd5f13948eb896ab4964b4c77a3','127.0.0.1',1486608248,'__ci_last_regenerate|i:1486608248;'),('3297b5a7d3784b682e90c607e94c4acadec79188','127.0.0.1',1486608498,'__ci_last_regenerate|i:1486608498;'),('b6220246daf92cc907576bbc2d55d53b6d6b96fd','127.0.0.1',1486608498,'__ci_last_regenerate|i:1486608498;'),('b3a873bfb47fe99f4808d8f64edd2c9636115acf','127.0.0.1',1486608545,'__ci_last_regenerate|i:1486608498;'),('a06ce3a8423041c7e8bfd61b7d1dce1ab336666d','127.0.0.1',1486629450,'__ci_last_regenerate|i:1486629445;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('f09671d57d3d85593fa8728f87bc72657b01b826','127.0.0.1',1486629516,'__ci_last_regenerate|i:1486629501;'),('5ee044f601d8d4bcf48575fde825a7d44f061549','127.0.0.1',1486631057,'__ci_last_regenerate|i:1486631057;'),('d9e60d7707275b271b8f529c6acf661150ab53fd','127.0.0.1',1486631057,'__ci_last_regenerate|i:1486631057;'),('e8ba656ea90a61f8306d22889bfead58b8da49d9','127.0.0.1',1486631070,'__ci_last_regenerate|i:1486631070;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('eedf08395811704fdb823eb2a0333a8a09643d41','127.0.0.1',1486631151,'__ci_last_regenerate|i:1486631070;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('6e2f8da2f5e2ea66404e9f4fbf84cce58f315c83','127.0.0.1',1486631851,'__ci_last_regenerate|i:1486631851;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('585da6f02948be32a22018614e2e150eab2fef85','127.0.0.1',1486631851,'__ci_last_regenerate|i:1486631851;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('d5989b79bf3c4acd9d866090500ba35e488b6aab','127.0.0.1',1486631978,'__ci_last_regenerate|i:1486631851;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('f229552f4ca914f13502b8cda2eb97f0e9aa7ed7','127.0.0.1',1486632242,'__ci_last_regenerate|i:1486632242;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('89c385bc379540fcd2c75cd42c36f67de2a461c1','127.0.0.1',1486632242,'__ci_last_regenerate|i:1486632242;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('f7c737683e5d7d7b13b5acf1087e55e32eaba93a','127.0.0.1',1486632270,'__ci_last_regenerate|i:1486632242;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('f3f56c5bd37e9631487a650b6df6bfcb8f801d1b','127.0.0.1',1486670475,'__ci_last_regenerate|i:1486670475;'),('7d6ed987639e05e1d310513f308af2d70e50befa','127.0.0.1',1486670555,'__ci_last_regenerate|i:1486670475;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('e7e7023b659d680b33bb536bfec3e2c4ceec65e2','127.0.0.1',1486670475,'__ci_last_regenerate|i:1486670475;'),('4d37479d3c88ddc448a551596623f02897f12318','127.0.0.1',1486682959,'__ci_last_regenerate|i:1486682959;'),('598b08b9f5eb3a682e67c084ba58a3f54a255142','127.0.0.1',1486682974,'__ci_last_regenerate|i:1486682959;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('c5ae1c9fad4dd9b7454261265446fea70a5e7669','127.0.0.1',1486682959,'__ci_last_regenerate|i:1486682959;'),('e453f4b21b3953d483d17fe6110e20890179a8f3','127.0.0.1',1486713315,'__ci_last_regenerate|i:1486713315;'),('7da515866fffad1fb69d49d25e21607170c6e191','127.0.0.1',1486713406,'__ci_last_regenerate|i:1486713315;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('e5d68ea52e970617c8f7731dac4513e94250b89d','127.0.0.1',1486713315,'__ci_last_regenerate|i:1486713315;'),('228b7b76916d391d3a5c2175e5006c778ddc5af1','127.0.0.1',1486721821,'__ci_last_regenerate|i:1486721821;'),('2056a16b2ea8fe81f8301632c37bfec7ac9b225d','127.0.0.1',1486722024,'__ci_last_regenerate|i:1486721821;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('9c9c1013653c52e92ad5a38d7275d1597b709683','127.0.0.1',1486721821,'__ci_last_regenerate|i:1486721821;'),('8cafcbbb555cc418b93b6f4605816b553f06efd5','127.0.0.1',1486749801,'__ci_last_regenerate|i:1486749801;'),('1bfb107c0dc2d0d132c456bc41b9aadf61d5d19e','127.0.0.1',1486749850,'__ci_last_regenerate|i:1486749801;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('e80200551c7d0137f854e0c15b3dbb67942b4e6c','127.0.0.1',1486749801,'__ci_last_regenerate|i:1486749801;'),('bb72e275f593256afef55162069aa64d6d5b49d4','127.0.0.1',1486750571,'__ci_last_regenerate|i:1486750571;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('c7a9f44c77554436ee76afbe675e12080ccb54a8','127.0.0.1',1486750681,'__ci_last_regenerate|i:1486750571;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('3f2c43dce2d4bcb05777fa23bd6ecb8b6073418a','127.0.0.1',1486751044,'__ci_last_regenerate|i:1486751044;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('0525b233d67380496c0d2a12f78ef66d62826e40','127.0.0.1',1486751044,'__ci_last_regenerate|i:1486751044;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('cf4d301e5439168420edb1a0918a82e2928c4376','127.0.0.1',1486751813,'__ci_last_regenerate|i:1486751813;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('99233d8c9fbe615c3496cc370c64b2f2d2d8978b','127.0.0.1',1486751813,'__ci_last_regenerate|i:1486751813;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('dfa1a5ed9f77697ac08b364b84d031b37bc5e08a','127.0.0.1',1486751813,'__ci_last_regenerate|i:1486751813;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('70676cb652d8ea7391d6a377d0bc14b00af5a246','127.0.0.1',1486752114,'__ci_last_regenerate|i:1486752114;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('cac596851e0defa2e07532df97552e85f3c7cb96','127.0.0.1',1486752114,'__ci_last_regenerate|i:1486752114;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('5fbbfc68fa2d4161339bb446021b137db5d36606','127.0.0.1',1486752179,'__ci_last_regenerate|i:1486752114;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}');
/*!40000 ALTER TABLE `ci_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `cityid` int(10) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) NOT NULL,
  `regionid` int(11) NOT NULL COMMENT 'ID области',
  `active` tinyint(1) NOT NULL COMMENT 'Подключение к системе',
  `adminid` int(6) NOT NULL COMMENT 'cityadmin ID',
  `cover` varchar(255) DEFAULT NULL COMMENT 'URL к обложке города',
  `embleme` varchar(255) DEFAULT NULL COMMENT 'Герб міста',
  PRIMARY KEY (`cityid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Краматорськ',0,1,0,'','');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deputies`
--

DROP TABLE IF EXISTS `deputies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deputies` (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `user_id` smallint(4) DEFAULT NULL COMMENT 'користувач, за яким депутат заходе у систему',
  `surname` varchar(32) NOT NULL COMMENT 'прізвище',
  `name` varchar(16) NOT NULL COMMENT 'ім''я',
  `patronymic` varchar(16) NOT NULL COMMENT 'по-батькові',
  `bio` varchar(600) NOT NULL COMMENT 'відомості',
  `tvoid` tinyint(2) DEFAULT NULL COMMENT '№ ТВО за яким закріплено; 0 – лідер списку',
  `party_id` tinyint(1) NOT NULL COMMENT 'id партії згідно parties',
  `sex` enum('m','f','','') DEFAULT NULL COMMENT 'стать для дієвідмінювання',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deputies`
--

LOCK TABLES `deputies` WRITE;
/*!40000 ALTER TABLE `deputies` DISABLE KEYS */;
INSERT INTO `deputies` VALUES (1,NULL,'Тітова','Надія','Євгенівна','456546',3,1,'f'),(2,NULL,'Соболєва','Ніна','Михайлівна','wq',2,3,'f'),(3,NULL,'Разживін','Микола','Олексійович','2',4,4,'m'),(4,NULL,'Савченко','Наталія','Миколаївна','324',9,3,'f'),(5,NULL,'Єрмольченко','Олександр','Юрійович','',1,2,'m'),(6,NULL,'Нечволода','Євген','Іванович','',5,2,'m'),(7,NULL,'Бондаренко','Володимир','Григорович','',7,2,'m'),(8,64,'Суков','Геннадій','Сергійович','Громадянин України, народився 26.03.1959 р., освіта вища, безпартійний, Публічне акціонерне товариство \"Ново краматорський машинобудівний завод\", Генеральний директор, голова правління, місце проживання: м. Краматорськ, Донецька обл.',0,1,'m'),(9,NULL,'Гончаренко','Олександр','Васильович','',9,2,'m');
/*!40000 ALTER TABLE `deputies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `districts`
--

DROP TABLE IF EXISTS `districts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `districts` (
  `id` int(6) NOT NULL COMMENT 'власне номер дільниці',
  `city_id` int(10) NOT NULL,
  `vertex` varchar(1280) NOT NULL COMMENT 'координати вершин багатокутника меж дільниці',
  `addresses` text NOT NULL COMMENT 'Опис меж дільниці',
  `place_id` int(6) DEFAULT NULL COMMENT 'адреса дільниці — згідно таблиці places',
  `tvoid` tinyint(2) NOT NULL COMMENT 'до якої територіальної виборчої комісії входить',
  PRIMARY KEY (`id`),
  KEY `slug` (`vertex`(255)),
  KEY `place_id` (`place_id`),
  KEY `place_id_2` (`place_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `districts`
--

LOCK TABLES `districts` WRITE;
/*!40000 ALTER TABLE `districts` DISABLE KEYS */;
INSERT INTO `districts` VALUES (140970,1,'48.7479,37.6146;48.7463,37.6196;48.7490,37.6214;48.7490,37.6205;48.7479,37.6196;48.7482,37.6186;48.7492,37.6191;48.7492,37.6196;48.7496,37.6198;48.7500,37.6184;48.7488,37.6140','вул. Кришталева: 4–10; вул. Леоніда Бикова: 1, 5, 9–12',1,1),(140971,1,'48.7471,37.6116;48.7489,37.6102;48.7498,37.6133;48.7479,37.6146;48.7461,37.6136;48.7465,37.6126','вул. Бєляєва: 119, 123; вул. Леоніда Бикова: 13–15;',1,1),(140972,1,'48.7445,37.6187;48.7460,37.6199;48.7475,37.6209;48.7490,37.6216;48.7498,37.6200;48.7492,37.6196;48.7492,37.6191;48.7482,37.6186;48.7479,37.6196;48.7490,37.6205;48.7490,37.6214;48.7463,37.6196;48.7479,37.6146;48.7461,37.6136','вул.Кришталева: 2; вул.Леоніда Бикова: 17–25',1,2),(140973,1,'48.7537,37.6098;48.7539,37.6103;48.7526,37.6144;48.7510,37.6131;48.7499,37.6096;48.7510,37.6089;48.7518,37.6085;48.7518,37.6090','вул. Бєляєва: 109–115; вул. Хабаровська: 32–38',7,2),(140974,1,'48.7526,37.6144;48.7519,37.6163;48.7497,37.6146;48.7490,37.6150;48.7488,37.6140;48.7498,37.6133;48.7489,37.6102;48.7499,37.6096;48.7510,37.6131','вул. Бєляєва: 117, 121, 127; вул. Хабаровська: 40',7,3),(140975,1,'48.7498,37.6147;48.7519,37.6163;48.7500,37.6220;48.7515,37.6229;48.7538,37.6214;48.7547,37.6253;48.7523,37.6262;48.7518,37.6258;48.7515,37.6229;48.7500,37.6220;48.7510,37.6191;48.7500,37.6184;48.7490,37.6150','вул. Леоніда Бикова: 2–4, 6; вул. Ульянівська',7,3),(140976,1,'48.7683,37.5890;48.7678,37.5913;48.7660,37.5904;48.7651,37.5952;48.7625,37.5943;48.7632,37.5902;48.7614,37.5893;48.7621,37.5861','вул. Водобуд, вул. Дніпровська: 2–9, 15; вул. Коксобуд, вул. Прилуцька: 1–12; вул. Сахалінська',10,4),(140977,1,'48.7625,37.5943;48.7650,37.5952;48.7648,37.5963;48.7601,37.5942;48.7593,37.5935;48.7594,37.5930;48.7591,37.5925;48.7614,37.5857;48.7621,37.5861;48.7614,37.5893;48.7633,37.5903;48.7629,37.5924;48.7614,37.5918;48.7609,37.5946;48.7624,37.5952','вул. Архангельська, вул. Дніпровська: 10–12; вул. Прилуцька: 16–18',11,5),(140978,1,'48.7695,37.5935;48.7672,37.5962;48.7658,37.6015;48.7652,37.6053;48.7683,37.6068;48.7698,37.6129;48.7673,37.6209;48.7620,37.6168;48.7619,37.6172;48.7614,37.6168;48.7625,37.6124;48.7620,37.6121;48.7611,37.6117;48.7599,37.6164;48.7597,37.6163;48.7593,37.6173;48.7593,37.6179;48.7594,37.6184;48.7588,37.6189;48.7576,37.6197;48.7568,37.6176;48.7615,37.5950;48.7648,37.5963;48.7660,37.5904;48.7697,37.5925','смт Біленьке – вул. Байкальська, вул. Бєляєва: 1–45; вул. Василькова, вул. Волоколамська: 1, 3, 5, 7, 9, 11, 13; вул. Грушевського, вул. Джамбульська, вул. Дніпропетровська: 15–162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194; вул. Єнісейська, вул. Заводська: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 25, 27, 29, 33, 35, 37, 39, 41, 43, 45, 47, 51, 119, 121, 123, 125, 127, 129, 131, 133, 135, 137–139, 141, 143, 145, 147, 149, 151, 153, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 179, 181, 183–185; вул. Зарічна, вул. Земнухова, вул. Кокчетавська, вул. Кривоноса, вул. Кручковського: 1–44, 48, 52, 54, 56, 58, 62, 64, 66, 68; вул. Леонова, вул. Львівська, вул. Мостова, вул. Ольги Кобилянської, вул. Пензенська, вул. Прилуцька, вул. Саркіса, вул. Сахалінська, вул. Саянська, вул. Соборна, вул. Софіївська: 1–143, 145, 147, 155, 159, 161, 163, 165; вул. Таджицька, вул. Чукотська, пров. Вологодський: 3–17; пров. Гродненський, пров. Екскавації: 1–24; пров. Ізюмський, пров. Курганський, пров. Нахічеванський, пров. Парниковий, пров. Цимлянський',2,6),(140979,1,'48.7615,37.5950;48.7568,37.6177;48.7570,37.6193;48.7515,37.6228;48.7500,37.6220;48.7539,37.6103;48.7537,37.6098;48.7518,37.6090;48.7518,37.6085;48.7521,37.6084;48.7540,37.6089;48.7562,37.5988;48.7579,37.5956;48.7591,37.5925;48.7594,37.5930;48.7593,37.5935;48.7600,37.5942','смт Біленьке – вул. Архангельська: 2–238, 240; вул. Астраханська: 1–206, 208, 210; вул. Барнаульська, вул. Бєляєва: 79–105; вул. Бородіно: 1–177, 179; вул. Брянська: 1–194, 196, 198; вул. Заводська: 2, 4, 6, 8, 10, 12–14, 16, 18, 20, 22–24, 26, 28, 30–32, 34, 36, 38, 40, 42, 44, 46, 48–50, 52–118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 140, 142, 144, 146, 148, 150, 152, 154–156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 188–190, 192; вул. Кобзаря, вул. Пугачова, вул. Софіївська: 144, 146, 148–154, 156–158, 160, 162, 164, 166, 168, 170, 172, 176, 178, 180, 184, 186, 188, 190, 192, 194, 196; вул. Хабаровська, пров. Вологодський: 36; пров. Екскавації: 38–49',2,6),(140980,1,'48.7594,37.6184;48.7593,37.6179;48.7593,37.6173;48.7597,37.6163;48.7599,37.6164;48.7611,37.6117;48.7625,37.6124;48.7614,37.6168;48.7619,37.6172;48.7620,37.6168;48.7673,37.6209;48.7668,37.6240;48.7664,37.6248;48.7633,37.6288;48.7589,37.6286;48.7587,37.6293;48.7554,37.6294;48.7539,37.6214;48.7574,37.6191;48.7576,37.6197','смт Біленьке – вул. Абая, вул. Архангельська: 239, 241–310; вул. Астраханська: 207, 209, 211–278; вул. Бєляєва: 49; вул. Бородіно: 178, 180–271; вул. Брянська: 195, 197, 199–272; вул. Ванди, вул. Ветеранів, вул. Волоколамська: 2, 4, 6, 8, 10, 12, 14–50; вул. Галілея, вул. Дмитра Донського, вул. Дніпропетровська: 163, 165, 167, 169, 171, 173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195–290; вул. Доватора, вул. Заводська: 191, 193–285; вул. Іркутська, вул. Камська, вул. Кручковського: 47, 49–51, 53, 55, 57, 59–61, 63, 65, 67, 69–116; вул. Новий Світ, вул. Пирогова, вул. Софіївська: 167, 169, 171, 173–175, 177, 179, 183, 185, 187, 189, 191, 193, 195, 197–201',2,7),(140981,1,'48.7633,37.6288;48.7668,37.6240;48.7672,37.6211;48.7699,37.6128;48.7706,37.6070;48.7713,37.6071;48.7722,37.6101;48.7723,37.6136;48.7709,37.6201;48.7691,37.6260;48.7696,37.6272;48.7633,37.6504;48.7616,37.6543;48.7593,37.6962;48.7610,37.6959;48.7635,37.7000;48.7627,37.7018;48.7636,37.7025;48.7629,37.7045;48.7617,37.7035;48.7612,37.7047;48.7578,37.7021;48.7593,37.6961;48.7616,37.6544;48.7539,37.6531;48.7545,37.6453;48.7535,37.6414;48.7524,37.6412;48.7489,37.6303;48.7442,37.6315;48.7434,37.6284;48.7480,37.6253;48.7502,37.6313;48.7558,37.6315;48.7555,37.6294;48.7587,37.6293;48.7589,37.6286','смт Біленьке – вул. Адамова, вул. Аджарська, вул. Айвазовського, вул. Багряна, вул. Блока, вул. Грабовського, вул. Естонська, вул. Золотиста, вул. Зоряна, вул. Калинова, вул. Каштанова, вул. Кільцева, вул. Лугова, вул. Новосибірська, вул. Підгірна, вул. Райкіна, вул. Ровенська, вул. Родникова, вул. Серафимовича, вул. Титова, вул. Тютчева, вул. Челябінська, вул. Читинська, вул. Шаляпіна, пров. Тайшетський, пров. Тополиний, с-ще Василівська Пустош',2,7),(140982,1,'48.7539,37.5550;48.7507,37.5540;48.7495,37.5548;48.7491,37.5559;48.7530,37.5584;48.7560,37.5590;48.7695,37.5569;48.7733,37.5582;48.7760,37.5585;48.7764,37.5568;48.7765,37.5542;48.7778,37.5542;48.7788,37.5547;48.7794,37.5536;48.7805,37.5546;48.7809,37.5537;48.7803,37.5532;48.7832,37.5477;48.7847,37.5424;48.7836,37.5414;48.7823,37.5467;48.7818,37.5477;48.7812,37.5479;48.7811,37.5482;48.7807,37.5483;48.7807,37.5487;48.7801,37.5488;48.7801,37.5490;48.7803,37.5490;48.7799,37.5516;48.7729,37.5515;48.7610,37.5532;48.7610,37.5537','смт Ясногірка – вул. Адлерська, вул. Волховська, вул. Горна, вул. Дружби, вул. Карельська, вул. Карпенка-Карого, вул. Купріна, вул. Литовська, вул. Лівобережна: 1–301, 303, 305, 307, 309, 311, 313, 315, 317, 319, 321, 323, 325, 327, 329, 331, 333–337, 339, 341, 343, 345, 347, 349–353, 355, 357–359; вул. Пермська, вул. Плотинна, вул. Рилєєва, вул. Уссурійська, пров. Волинський, пров. Криворізький, пров. Ладозький, пров. Мирний, пров. Ярославський',3,9),(140983,1,'48.7696,37.5435;48.7770,37.5423;48.7807,37.5422;48.7823,37.5468;48.7821,37.5474;48.7818,37.5477;48.7812,37.5479;48.7811,37.5482;48.7807,37.5483;48.7807,37.5487;48.7801,37.5488;48.7801,37.5490;48.7803,37.5490;48.7799,37.5516;48.7729,37.5515;48.7610,37.5532;48.7610,37.5537;48.7540,37.5550;48.7507,37.5540;48.7522,37.5529;48.7539,37.5534;48.7563,37.5528;48.7562,37.5501;48.7591,37.5497;48.7590,37.5467','смт Ясногірка – вул. Братська, вул. Курчатова, вул. Лесі Українки, вул. Маршала Рокосовського, вул. Миколаївська, вул. Петра Сенченка, вул. Петрівська',3,9),(140985,1,'48.7804,37.5940;48.7728,37.5907;48.7769,37.5867;48.7801,37.5797;48.7822,37.5755;48.7860,37.5791;48.7855,37.5821;48.7831,37.5810;48.7830,37.5817;48.7827,37.5815','смт Ясногірка – вул. Андрія Рубльова, вул. Баженова, вул. Вороніхіна, вул. Космонавтів, вул. Марка Бернеса, вул. Надії, вул. Оксани Петрусенко, вул. Парникова, вул. Теплична, пров. Тепличний',13,4),(141055,1,'48.7629,37.5924;48.7624,37.5952;48.7609,37.5946;48.7614,37.5918','Комунальна медична установа \"Міська лікарня № 2\"',12,5);
/*!40000 ALTER TABLE `districts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parties`
--

DROP TABLE IF EXISTS `parties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parties` (
  `id` tinyint(1) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `genitive_case` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parties`
--

LOCK TABLES `parties` WRITE;
/*!40000 ALTER TABLE `parties` DISABLE KEYS */;
INSERT INTO `parties` VALUES (1,'політична партія «Опозиційний блок»','політичної партії «Опозиційний блок»'),(2,'політична партія «Наш край»','політичної партії «Наш край»'),(3,'партія «блок Петра Порошенка „Солідарність”»','партії «блок Петра Порошенка „Солідарність”»'),(4,'партія пенсіонерів України','партії пенсіонерів України');
/*!40000 ALTER TABLE `parties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `places`
--

DROP TABLE IF EXISTS `places`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `places` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `latitude` decimal(7,4) NOT NULL,
  `longitude` decimal(7,4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places`
--

LOCK TABLES `places` WRITE;
/*!40000 ALTER TABLE `places` DISABLE KEYS */;
INSERT INTO `places` VALUES (1,'вул. Леоніда Бикова, 7 (школа № 16)',48.7479,37.6146),(2,'вул. Софіївська, 136, смт Біленьке (школа № 26)',48.7587,37.6154),(3,'вул. Волховська, 1, смт Ясногірка (школа № 30)',48.7720,37.5530),(7,'вул. Хабаровська, 40 (школа № 10)',48.7521,37.6140),(10,'вул. Дніпровська, 7 (Краматорське вище професійне металургійне училище)',48.7631,37.5930),(11,'вул. Архангельська, 11 (Краматорська українська гімназія)',48.7610,37.5930),(12,'вул. Дніпровська, 14 (міська лікарня № 2)',48.7621,37.5934),(13,'вул. Ольги Кобилянської, 1 (школа № 19)',48.7653,37.5906);
/*!40000 ALTER TABLE `places` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region` (
  `id` int(6) NOT NULL COMMENT 'ID области',
  `name` varchar(255) NOT NULL COMMENT 'Название области',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (0,'Донецька');
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `request` (
  `requestid` int(10) NOT NULL AUTO_INCREMENT,
  `adddate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type` enum('custom','material') NOT NULL,
  `title` varchar(128) NOT NULL,
  `text` text NOT NULL,
  `public_appeal` tinyint(4) NOT NULL,
  `user_id` int(10) NOT NULL,
  `deputy_id` int(10) NOT NULL,
  `reply_id` int(10) NOT NULL,
  `status` enum('new','answered','rejected','') NOT NULL DEFAULT 'new',
  PRIMARY KEY (`requestid`),
  UNIQUE KEY `requestid` (`requestid`),
  KEY `userid` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (12,'2016-11-26 18:33:47','custom','Test request','Text of test request1',0,35,0,0,'new'),(13,'2016-11-26 18:37:01','custom','Новый запрос','Текст нового запроса',0,28,0,0,'new'),(14,'2016-11-26 21:07:04','custom','New request','New request text',0,1,0,0,'new'),(15,'2016-11-26 23:59:46','custom','News 1 Title','News 1 Title text',0,1,0,0,'new'),(16,'2016-11-27 00:17:28','custom','Edited title of Test request','Edited text of request',0,1,0,0,'new'),(17,'2016-11-27 00:20:12','custom','Edited title of Test request','Edited 35',0,1,0,0,'new'),(18,'2016-11-28 13:34:15','custom','48484512','5154845151',0,1,0,0,'answered');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tvo`
--

DROP TABLE IF EXISTS `tvo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tvo` (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT COMMENT 'власне номер округу',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tvo`
--

LOCK TABLES `tvo` WRITE;
/*!40000 ALTER TABLE `tvo` DISABLE KEYS */;
INSERT INTO `tvo` VALUES (1),(2),(3),(4),(5),(6),(7),(9);
/*!40000 ALTER TABLE `tvo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userid` int(10) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `secondname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `city_id` int(10) NOT NULL,
  `street` varchar(255) NOT NULL,
  `home` int(10) NOT NULL,
  `tvo_id` int(10) NOT NULL,
  `joindate` timestamp NULL DEFAULT NULL,
  `role` enum('user','deputy','admin','cityadmin') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Алексей','Владимирович','Поддубный','$2y$10$WB9S1eZfJ6QAWuuYGDn1l.KHtRenSjMQ4G.A61G/zi66Cfmu6JWEi','usatij.alex@gmail.com','+380955218618',1,'Беляева',111,140973,'2016-10-24 23:38:53','admin'),(20,'Alex','','Poddubny','$2y$10$Wj3Tq29gXH7XyIqXIjDprejB1RVKR7mzq8Z888wVv0T1qtvSHJcE6','usatij@yandex.ru','',1,'проспект Мира',10,0,'2016-10-24 20:30:29','user'),(28,'Alex Poddubny','','','$2y$10$XQbCmdUNs.iN.i97VM6quuOlUvGJHlLocg57.pGjSWxedgF/fVJNq','1@gmail.com','2',1,'',0,0,'2016-11-05 23:02:47','admin'),(33,'Алексей','Владимирович','Поддубный','$2y$10$PrAOCT9X21jHn2ez1Lnj2O7uBKpj2YW.AwFKhMoCgzquqjEx1QSGW','usatij@yandex.ua','+380955218618',1,'Бєляєва',111,0,'2016-11-20 21:59:52','cityadmin'),(35,'Никита','','Еремин','$2y$10$TRepFPZ/djz50BgMdpBzZOu2fWhzWtgWtFL.Sn.WFnVPchWKJJkE.','nikyer@gmail.com','0954598132',1,'',0,0,'2016-11-26 21:15:10','admin'),(41,'Известный экономист','','','$2y$10$PZ9x50SKXYRaFOg8n.Kg0ecfSKEXVgYHeVBxH049LW5EPpJ.hlGdm','artemka_krm@ukr.net','',1,'',0,0,'2016-11-27 16:51:17','user'),(54,'Семен','Семенович','Горбунков','$2y$10$PKYDbibtygha6.pLq321nO1wXhgxctIPG999ux/vgNCB3Fqb5vKyG','gorb@gmail.com','+380951234567',1,'Мира',111,0,'2017-01-09 13:11:39','user'),(64,'Полиграф','Полиграфыч','Шариков','$2y$10$UcKJGx/CgMQ7M7YX.QT8deQ8yIhFCwzLNst01yNIn4zOuLzCxVaC.','sharik@gmail.com','+380959999999',1,'Московська',12,0,'2017-01-13 00:25:23','deputy'),(79,'Полиграф','Полиграфович','Шариков','$2y$10$dLD/Z5WFiI.PyS9DYu/quOG3AdRQRH/jWFxqa4kqs50KX4.EuvvKW','sharikoff@gmail.com','+380999874563',1,'Бикова',15,0,'2017-01-27 11:59:35','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-11  9:59:13
