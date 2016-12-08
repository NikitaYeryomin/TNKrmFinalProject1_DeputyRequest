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
INSERT INTO `ci_sessions` VALUES ('12a3b53e1ad12292ae30a220f497d2e37e168f40','127.0.0.1',1481058505,'__ci_last_regenerate|i:1481058217;'),('b3e322c01042031852b755f0ef73076ac6f005bc','127.0.0.1',1481058704,'__ci_last_regenerate|i:1481058704;'),('6954abe081749d5efc4cec23df45939bc80b67a5','127.0.0.1',1481059463,'__ci_last_regenerate|i:1481059222;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:6:\"logged\";b:1;}'),('3b9d1345c1110404075138df1f1bceabcbc0ee6e','127.0.0.1',1481063421,'__ci_last_regenerate|i:1481063421;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:6:\"logged\";b:1;}'),('fc1a2c33c15a180e509a9f11cc5a6b5364cc9f4c','127.0.0.1',1481064556,'__ci_last_regenerate|i:1481064556;'),('422eacb58a740b5a624b161c7474af2ac05fb8da','127.0.0.1',1481064861,'__ci_last_regenerate|i:1481064628;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:6:\"logged\";b:1;}'),('d3b1680f27f86dea93300a9fc22698bebf017b53','127.0.0.1',1481065184,'__ci_last_regenerate|i:1481065037;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:6:\"logged\";b:1;}'),('c55585761e3ce12d4b8ec2291931337fa9f1e0ee','127.0.0.1',1481065571,'__ci_last_regenerate|i:1481065571;'),('5b1ede18dfad38eb0a90a34c74d2bafec1fb7009','127.0.0.1',1481065593,'__ci_last_regenerate|i:1481065593;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('b7272351071605ed7417ede218490d91cd23d820','127.0.0.1',1481066371,'__ci_last_regenerate|i:1481066371;'),('c46eba8f5caa7cd1091b6fe144a978b66ffa51a3','127.0.0.1',1481066540,'__ci_last_regenerate|i:1481066389;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('604b00531ffed26c03fb15e255f08668a9bedfd6','127.0.0.1',1481067161,'__ci_last_regenerate|i:1481066867;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('314a1ba05b0f773a5995440748d7890f54a76337','127.0.0.1',1481067190,'__ci_last_regenerate|i:1481067190;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('064a9e648d5a06de581d4d37c99ac714e3a4ad9b','127.0.0.1',1481067523,'__ci_last_regenerate|i:1481067500;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('08a9ae0da42be53899277d35ece374351c262178','127.0.0.1',1481069397,'__ci_last_regenerate|i:1481069397;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:5:\"admin\";}'),('f690386f7e2c4a5d09ec4fb9d13528329454c8a8','127.0.0.1',1481070353,'__ci_last_regenerate|i:1481070353;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:4:\"user\";}'),('689f4c383135375acb7e261ba8ee3d2a914cac7d','127.0.0.1',1481070701,'__ci_last_regenerate|i:1481070666;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:4:\"user\";}'),('5050724c1b9a45c41c876484e6939c89549d353e','127.0.0.1',1481074124,'__ci_last_regenerate|i:1481073987;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:4:\"user\";}'),('9afa0e02e6e37fdb69d668916922fbb6e0fd22e9','127.0.0.1',1481077124,'__ci_last_regenerate|i:1481077123;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:4:\"user\";}'),('e0c1535f0e9fccbd0a795b14d39c7d3a3c7fba30','127.0.0.1',1481095354,'__ci_last_regenerate|i:1481095335;'),('8b3333ee7c4eeccdb05e3e5e29ca5b26f59cc071','127.0.0.1',1481096151,'__ci_last_regenerate|i:1481096052;'),('3f8743e301e8f48ead0c8e5b8262b0c9b082ea92','127.0.0.1',1481096428,'__ci_last_regenerate|i:1481096428;'),('5ace28efb61d67764f772ef1d1c251e7fd03ce84','127.0.0.1',1481097128,'__ci_last_regenerate|i:1481096859;'),('f813c86278ca6123968ce897c46ac33aeba1c935','127.0.0.1',1481097546,'__ci_last_regenerate|i:1481097269;'),('d509a3f7b868c816d90ef33f7552a99fa85a0443','127.0.0.1',1481097903,'__ci_last_regenerate|i:1481097903;'),('9816b3f603aef1cff37c169eda1e4020fedaac54','127.0.0.1',1481106778,'__ci_last_regenerate|i:1481106778;'),('79bf2e6e9834fc9224e165370d20dd0999f1c080','127.0.0.1',1481107595,'__ci_last_regenerate|i:1481107304;'),('0e095b58a532629f836cfe2cb9a965082879c6bb','127.0.0.1',1481107767,'__ci_last_regenerate|i:1481107736;'),('aaf6df209e662ccd4ee72846f33e787e611759ca','127.0.0.1',1481116759,'__ci_last_regenerate|i:1481116759;'),('459d66c0ab80d278439d998f63dc1b675b032ce5','127.0.0.1',1481117456,'__ci_last_regenerate|i:1481117172;'),('03d4f57f4258bcf552982f5d87175fa7a7ef4710','127.0.0.1',1481117507,'__ci_last_regenerate|i:1481117499;'),('9d3ed609b3d20ef2a2aa98513e6fc46a1c25e3f8','127.0.0.1',1481121918,'__ci_last_regenerate|i:1481121621;'),('b0adcb0e8c990c1402e08e7a709e9500987f2c61','127.0.0.1',1481122095,'__ci_last_regenerate|i:1481122032;'),('9676a418019e8a0bbf32bfff61429059c7641966','127.0.0.1',1481143176,'__ci_last_regenerate|i:1481143176;'),('a83e7b56afdc0e93b3c6aab63f2226a1f45ffbb4','127.0.0.1',1481143999,'__ci_last_regenerate|i:1481143728;'),('db70eca5bffc9b729f9b6ebfea006ae30803466e','127.0.0.1',1481144939,'__ci_last_regenerate|i:1481144883;'),('4938767bf599f550dd7c24b23abb5f99de149f3d','127.0.0.1',1481171240,'__ci_last_regenerate|i:1481170948;'),('7af315f9ec77dc40b9d9f3556ba6211597509042','127.0.0.1',1481171461,'__ci_last_regenerate|i:1481171372;'),('8f644eac278f3dbd39080204925457e40795c3e7','127.0.0.1',1481172092,'__ci_last_regenerate|i:1481171834;'),('978eb9a2b6213798245a9ceb3b60b9263d987fd5','127.0.0.1',1481175592,'__ci_last_regenerate|i:1481175394;'),('9bbc5c40c08ce58e91a99b1cda9f81d2b0abc981','127.0.0.1',1481175777,'__ci_last_regenerate|i:1481175709;'),('73c3cacba15b72978fee7b6d3f2020338cdb0e87','127.0.0.1',1481207521,'__ci_last_regenerate|i:1481207521;'),('37cc981f275d8545b910ab9ad904d1ea12ce9a3a','127.0.0.1',1481207704,'__ci_last_regenerate|i:1481207521;logged_in|a:3:{s:2:\"id\";s:2:\"35\";s:8:\"username\";s:26:\"Еремин Никита \";s:4:\"role\";s:4:\"user\";}');
/*!40000 ALTER TABLE `ci_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deputies`
--

DROP TABLE IF EXISTS `deputies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deputies` (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `surname` varchar(32) NOT NULL COMMENT 'прізвище',
  `name` varchar(16) NOT NULL COMMENT 'ім''я',
  `patronymic` varchar(16) NOT NULL COMMENT 'по-батькові',
  `bio` varchar(600) NOT NULL COMMENT 'відомості',
  `tvoid` tinyint(2) DEFAULT NULL COMMENT '№ ТВО за яким закріплено',
  `party_id` tinyint(1) NOT NULL COMMENT 'id партії згідно parties',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deputies`
--

LOCK TABLES `deputies` WRITE;
/*!40000 ALTER TABLE `deputies` DISABLE KEYS */;
INSERT INTO `deputies` VALUES (1,'45','45','5345','456546',3,1),(2,'wqw','wq','w','wq',2,3),(3,'323','2323','','2',2,4),(4,'5','5','','324',3,3),(5,'реальный 5','2323','','',0,2),(6,'      323  ','3','','',2,2),(7,'    реальный 5 ',' ч ','','',2,2),(8,'Суков','Геннадій','Сергійович','Громадянин України, народився 26.03.1959 р., освіта вища, безпартійний, Публічне акціонерне товариство \"Ново краматорський машинобудівний завод\", Генеральний директор, голова правління, місце проживання: м. Краматорськ, Донецька обл.',0,1),(9,'    реальный 5 ',' ч ','','',2,2);
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
INSERT INTO `districts` VALUES (140970,'48.7479,37.6146;48.7463,37.6196;48.7490,37.6214;48.7490,37.6205;48.7479,37.6196;48.7482,37.6186;48.7492,37.6191;48.7492,37.6196;48.7496,37.6198;48.7500,37.6184;48.7488,37.6140','вул. Кришталева: 4–10; вул. Леоніда Бикова: 1, 5, 9–12',1,1),(140971,'48.7471,37.6116;48.7489,37.6102;48.7498,37.6133;48.7479,37.6146;48.7461,37.6136;48.7465,37.6126','вул. Бєляєва: 119, 123; вул. Леоніда Бикова: 13–15;',1,1),(140972,'48.7445,37.6187;48.7460,37.6199;48.7475,37.6209;48.7490,37.6216;48.7498,37.6200;48.7492,37.6196;48.7492,37.6191;48.7482,37.6186;48.7479,37.6196;48.7490,37.6205;48.7490,37.6214;48.7463,37.6196;48.7479,37.6146;48.7461,37.6136','вул. Кришталева: 2; вул.Леоніда Бикова: 17–25',1,2),(140973,'48.7537,37.6098;48.7539,37.6103;48.7526,37.6144;48.7510,37.6131;48.7499,37.6096;48.7510,37.6089;48.7518,37.6085;48.7518,37.6090','вул. Бєляєва: 109–115; вул. Хабаровська: 32–38',7,2),(140974,'48.7526,37.6144;48.7519,37.6163;48.7497,37.6146;48.7490,37.6150;48.7488,37.6140;48.7498,37.6133;48.7489,37.6102;48.7499,37.6096;48.7510,37.6131','вул. Бєляєва: 117, 121, 127; вул. Хабаровська: 40',7,3),(140975,'48.7498,37.6147;48.7519,37.6163;48.7500,37.6220;48.7515,37.6229;48.7538,37.6214;48.7547,37.6253;48.7523,37.6262;48.7518,37.6258;48.7515,37.6229;48.7500,37.6220;48.7510,37.6191;48.7500,37.6184;48.7490,37.6150','вул. Леоніда Бикова: 2–4, 6; вул. Ульянівська',7,3),(140976,'48.7683,37.5890;48.7678,37.5913;48.7660,37.5904;48.7651,37.5952;48.7625,37.5943;48.7632,37.5902;48.7614,37.5893;48.7621,37.5861','вул. Водобуд, вул. Дніпровська: 2–9, 15; вул. Коксобуд, вул. Прилуцька: 1–12; вул. Сахалінська',10,4),(140977,'48.7625,37.5943;48.7650,37.5952;48.7648,37.5963;48.7601,37.5942;48.7593,37.5935;48.7594,37.5930;48.7591,37.5925;48.7614,37.5857;48.7621,37.5861;48.7614,37.5893;48.7633,37.5903;48.7629,37.5924;48.7614,37.5918;48.7609,37.5946;48.7624,37.5952','вул. Архангельська, вул. Дніпровська: 10–12; вул. Прилуцька: 16–18',11,5),(140978,'48.7695,37.5935;48.7672,37.5962;48.7658,37.6015;48.7652,37.6053;48.7683,37.6068;48.7698,37.6129;48.7673,37.6209;48.7620,37.6168;48.7619,37.6172;48.7614,37.6168;48.7625,37.6124;48.7620,37.6121;48.7611,37.6117;48.7599,37.6164;48.7597,37.6163;48.7593,37.6173;48.7593,37.6179;48.7594,37.6184;48.7588,37.6189;48.7576,37.6197;48.7568,37.6176;48.7615,37.5950;48.7648,37.5963;48.7660,37.5904;48.7697,37.5925','смт Біленьке – вул. Байкальська, вул. Бєляєва: 1–45; вул. Василькова, вул. Волоколамська: 1, 3, 5, 7, 9, 11, 13; вул. Грушевського, вул. Джамбульська, вул. Дніпропетровська: 15–162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194; вул. Єнісейська, вул. Заводська: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 25, 27, 29, 33, 35, 37, 39, 41, 43, 45, 47, 51, 119, 121, 123, 125, 127, 129, 131, 133, 135, 137–139, 141, 143, 145, 147, 149, 151, 153, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 179, 181, 183–185; вул. Зарічна, вул. Земнухова, вул. Кокчетавська, вул. Кривоноса, вул. Кручковського: 1–44, 48, 52, 54, 56, 58, 62, 64, 66, 68; вул. Леонова, вул. Львівська, вул. Мостова, вул. Ольги Кобилянської, вул. Пензенська, вул. Прилуцька, вул. Саркіса, вул. Сахалінська, вул. Саянська, вул. Соборна, вул. Софіївська: 1–143, 145, 147, 155, 159, 161, 163, 165; вул. Таджицька, вул. Чукотська, пров. Вологодський: 3–17; пров. Гродненський, пров. Екскавації: 1–24; пров. Ізюмський, пров. Курганський, пров. Нахічеванський, пров. Парниковий, пров. Цимлянський',2,6),(140979,'48.7615,37.5950;48.7568,37.6177;48.7570,37.6193;48.7515,37.6228;48.7500,37.6220;48.7539,37.6103;48.7537,37.6098;48.7518,37.6090;48.7518,37.6085;48.7521,37.6084;48.7540,37.6089;48.7562,37.5988;48.7579,37.5956;48.7591,37.5925;48.7594,37.5930;48.7593,37.5935;48.7600,37.5942','смт Біленьке – вул. Архангельська: 2–238, 240; вул. Астраханська: 1–206, 208, 210; вул. Барнаульська, вул. Бєляєва: 79–105; вул. Бородіно: 1–177, 179; вул. Брянська: 1–194, 196, 198; вул. Заводська: 2, 4, 6, 8, 10, 12–14, 16, 18, 20, 22–24, 26, 28, 30–32, 34, 36, 38, 40, 42, 44, 46, 48–50, 52–118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 140, 142, 144, 146, 148, 150, 152, 154–156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 188–190, 192; вул. Кобзаря, вул. Пугачова, вул. Софіївська: 144, 146, 148–154, 156–158, 160, 162, 164, 166, 168, 170, 172, 176, 178, 180, 184, 186, 188, 190, 192, 194, 196; вул. Хабаровська, пров. Вологодський: 36; пров. Екскавації: 38–49',2,6),(140980,'48.7594,37.6184;48.7593,37.6179;48.7593,37.6173;48.7597,37.6163;48.7599,37.6164;48.7611,37.6117;48.7625,37.6124;48.7614,37.6168;48.7619,37.6172;48.7620,37.6168;48.7673,37.6209;48.7668,37.6240;48.7664,37.6248;48.7633,37.6288;48.7589,37.6286;48.7587,37.6293;48.7554,37.6294;48.7539,37.6214;48.7574,37.6191;48.7576,37.6197','смт Біленьке – вул. Абая, вул. Архангельська: 239, 241–310; вул. Астраханська: 207, 209, 211–278; вул. Бєляєва: 49; вул. Бородіно: 178, 180–271; вул. Брянська: 195, 197, 199–272; вул. Ванди, вул. Ветеранів, вул. Волоколамська: 2, 4, 6, 8, 10, 12, 14–50; вул. Галілея, вул. Дмитра Донського, вул. Дніпропетровська: 163, 165, 167, 169, 171, 173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195–290; вул. Доватора, вул. Заводська: 191, 193–285; вул. Іркутська, вул. Камська, вул. Кручковського: 47, 49–51, 53, 55, 57, 59–61, 63, 65, 67, 69–116; вул. Новий Світ, вул. Пирогова, вул. Софіївська: 167, 169, 171, 173–175, 177, 179, 183, 185, 187, 189, 191, 193, 195, 197–201',2,7),(140981,'48.7633,37.6288;48.7668,37.6240;48.7672,37.6211;48.7699,37.6128;48.7706,37.6070;48.7713,37.6071;48.7722,37.6101;48.7723,37.6136;48.7709,37.6201;48.7691,37.6260;48.7696,37.6272;48.7633,37.6504;48.7616,37.6543;48.7593,37.6962;48.7610,37.6959;48.7635,37.7000;48.7627,37.7018;48.7636,37.7025;48.7629,37.7045;48.7617,37.7035;48.7612,37.7047;48.7578,37.7021;48.7593,37.6961;48.7616,37.6544;48.7539,37.6531;48.7545,37.6453;48.7535,37.6414;48.7524,37.6412;48.7489,37.6303;48.7442,37.6315;48.7434,37.6284;48.7480,37.6253;48.7502,37.6313;48.7558,37.6315;48.7555,37.6294;48.7587,37.6293;48.7589,37.6286','смт Біленьке – вул. Адамова, вул. Аджарська, вул. Айвазовського, вул. Багряна, вул. Блока, вул. Грабовського, вул. Естонська, вул. Золотиста, вул. Зоряна, вул. Калинова, вул. Каштанова, вул. Кільцева, вул. Лугова, вул. Новосибірська, вул. Підгірна, вул. Райкіна, вул. Ровенська, вул. Родникова, вул. Серафимовича, вул. Титова, вул. Тютчева, вул. Челябінська, вул. Читинська, вул. Шаляпіна, пров. Тайшетський, пров. Тополиний, с-ще Василівська Пустош',2,7),(140982,'48.7539,37.5550;48.7507,37.5540;48.7495,37.5548;48.7491,37.5559;48.7530,37.5584;48.7560,37.5590;48.7695,37.5569;48.7733,37.5582;48.7760,37.5585;48.7764,37.5568;48.7765,37.5542;48.7778,37.5542;48.7788,37.5547;48.7794,37.5536;48.7805,37.5546;48.7809,37.5537;48.7803,37.5532;48.7832,37.5477;48.7847,37.5424;48.7836,37.5414;48.7823,37.5467;48.7818,37.5477;48.7812,37.5479;48.7811,37.5482;48.7807,37.5483;48.7807,37.5487;48.7801,37.5488;48.7801,37.5490;48.7803,37.5490;48.7799,37.5516;48.7729,37.5515;48.7610,37.5532;48.7610,37.5537','смт Ясногірка – вул. Адлерська, вул. Волховська, вул. Горна, вул. Дружби, вул. Карельська, вул. Карпенка-Карого, вул. Купріна, вул. Литовська, вул. Лівобережна: 1–301, 303, 305, 307, 309, 311, 313, 315, 317, 319, 321, 323, 325, 327, 329, 331, 333–337, 339, 341, 343, 345, 347, 349–353, 355, 357–359; вул. Пермська, вул. Плотинна, вул. Рилєєва, вул. Уссурійська, пров. Волинський, пров. Криворізький, пров. Ладозький, пров. Мирний, пров. Ярославський',3,9),(140983,'48.7696,37.5435;48.7770,37.5423;48.7807,37.5422;48.7823,37.5468;48.7821,37.5474;48.7818,37.5477;48.7812,37.5479;48.7811,37.5482;48.7807,37.5483;48.7807,37.5487;48.7801,37.5488;48.7801,37.5490;48.7803,37.5490;48.7799,37.5516;48.7729,37.5515;48.7610,37.5532;48.7610,37.5537;48.7540,37.5550;48.7507,37.5540;48.7522,37.5529;48.7539,37.5534;48.7563,37.5528;48.7562,37.5501;48.7591,37.5497;48.7590,37.5467','смт Ясногірка – вул. Братська, вул. Курчатова, вул. Лесі Українки, вул. Маршала Рокосовського, вул. Миколаївська, вул. Петра Сенченка, вул. Петрівська',3,9),(140985,'48.7804,37.5940;48.7728,37.5907;48.7769,37.5867;48.7801,37.5797;48.7822,37.5755;48.7860,37.5791;48.7855,37.5821;48.7831,37.5810;48.7830,37.5817;48.7827,37.5815','смт Ясногірка – вул. Андрія Рубльова, вул. Баженова, вул. Вороніхіна, вул. Космонавтів, вул. Марка Бернеса, вул. Надії, вул. Оксани Петрусенко, вул. Парникова, вул. Теплична, пров. Тепличний',13,4),(141055,'48.7629,37.5924;48.7624,37.5952;48.7609,37.5946;48.7614,37.5918','Комунальна медична установа \"Міська лікарня № 2\"',12,5);
/*!40000 ALTER TABLE `districts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `slug` varchar(128) NOT NULL,
  `text` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'трагедия в Эстонии','emmaste','молодой человек получил кулаком в лицо'),(2,'погода','погода','дождь');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parties`
--

LOCK TABLES `parties` WRITE;
/*!40000 ALTER TABLE `parties` DISABLE KEYS */;
INSERT INTO `parties` VALUES (1,'політична партія «Опозиційний блок»'),(2,'політична партія «Наш край»'),(3,'партія «блок Петра Порошенка „Солідарність”»'),(4,'партія пенсіонерів України');
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
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `requests` (
  `requestid` int(10) NOT NULL AUTO_INCREMENT,
  `adddate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(128) NOT NULL,
  `text` text NOT NULL,
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
-- Dumping data for table `requests`
--

LOCK TABLES `requests` WRITE;
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
INSERT INTO `requests` VALUES (12,'2016-11-26 18:33:47','Test request','Text of test request1',35,0,0,'new'),(13,'2016-11-26 18:37:01','Новый запрос','Текст нового запроса',28,0,0,'new'),(14,'2016-11-26 21:07:04','New request','New request text',1,0,0,'new'),(15,'2016-11-26 23:59:46','News 1 Title','News 1 Title text',1,0,0,'new'),(16,'2016-11-27 00:17:28','Edited title of Test request','Edited text of request',1,0,0,'new'),(17,'2016-11-27 00:20:12','Edited title of Test request','Edited 35',1,0,0,'new'),(18,'2016-11-28 13:34:15','48484512','5154845151',1,0,0,'answered');
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;
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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userid` int(10) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `secondname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `city_id` int(10) NOT NULL,
  `street` varchar(255) NOT NULL,
  `home` int(10) NOT NULL,
  `tvo_id` int(10) NOT NULL,
  `joindate` timestamp NULL DEFAULT NULL,
  `role` enum('user','deputy','admin','') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Алексей','Владимирович','Поддубный','$2y$10$WB9S1eZfJ6QAWuuYGDn1l.KHtRenSjMQ4G.A61G/zi66Cfmu6JWEi','usatij.alex@gmail.com','+380955218618','Краматорск',0,'Беляева',111,0,'2016-10-24 23:38:53','admin'),(20,'Alex','','','$2y$10$Wj3Tq29gXH7XyIqXIjDprejB1RVKR7mzq8Z888wVv0T1qtvSHJcE6','usatij@yandex.ru','','',0,'',0,0,'2016-10-24 20:30:29','user'),(28,'Alex Poddubny','','','$2y$10$XQbCmdUNs.iN.i97VM6quuOlUvGJHlLocg57.pGjSWxedgF/fVJNq','1@gmail.com','2','',0,'',0,0,'2016-11-05 23:02:47','admin'),(33,'Алексей Поддубный','','','$2y$10$/gZh28A8wSdP3S6E678g4eSI.cUzDd65X2IiqR53N6CzytLeAORIe','usatij@yandex.ua','3','',0,'',0,0,'2016-11-20 21:59:52','user'),(35,'Никита','','Еремин','$2y$10$TRepFPZ/djz50BgMdpBzZOu2fWhzWtgWtFL.Sn.WFnVPchWKJJkE.','nikyer@gmail.com','0954598132','',0,'',0,0,'2016-11-26 21:15:10','user'),(40,'Известный экономист, по призванию своему — библиотекарь','','','$2y$10$iereC3qx/ix0hiAvse64AOgTLd697CzOrzCaKH1EeItkqBPmjAJD2','mail@mail.cpy','','',0,'',0,0,'2016-11-27 16:50:48','user'),(41,'Известный экономист, по призванию своему — библиотекарь','','','$2y$10$PZ9x50SKXYRaFOg8n.Kg0ecfSKEXVgYHeVBxH049LW5EPpJ.hlGdm','artemka_krm@ukr.net','','',0,'',0,0,'2016-11-27 16:51:17','user'),(42,'Иван','Иванович','Иванов','$2y$10$rvMwrioEICDtnnhbP/ErkuzWl608WbnTqVQGfPKBl5guSZrwlzlsy','q1@q.com','366','Краматорск',0,'Мира',15,0,'2016-11-28 10:27:48','');
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

-- Dump completed on 2016-12-08 17:36:08
