-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Мар 07 2017 г., 20:50
-- Версия сервера: 5.5.53-0ubuntu0.14.04.1
-- Версия PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `deputy_request`
--

-- --------------------------------------------------------

--
-- Структура таблицы `request`
--

CREATE TABLE IF NOT EXISTS `request` (
  `requestid` int(10) NOT NULL AUTO_INCREMENT,
  `adddate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type` enum('custom','material','living','family') NOT NULL,
  `title` varchar(128) NOT NULL,
  `text` text NOT NULL,
  `public_appeal` tinyint(4) NOT NULL,
  `user_id` int(10) NOT NULL,
  `deputy_id` int(10) NOT NULL,
  `status` enum('new','answered','rejected','not_ready') DEFAULT 'new',
  `response` text COMMENT 'текст відповіді',
  `ansdate` timestamp NULL DEFAULT NULL COMMENT 'час відповіді на звернення',
  PRIMARY KEY (`requestid`),
  UNIQUE KEY `requestid` (`requestid`),
  KEY `userid` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=41 ;

--
-- Дамп данных таблицы `request`
--

INSERT INTO `request` (`requestid`, `adddate`, `type`, `title`, `text`, `public_appeal`, `user_id`, `deputy_id`, `status`, `response`, `ansdate`) VALUES
(1, '2017-03-01 20:35:52', 'custom', '', 'сделайте дороги, блеать!!!', 1, 80, 7, 'answered', 'денихнет', '2017-03-07 20:24:28'),
(23, '2017-02-11 22:22:58', 'custom', '', 'личное звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата Довыльне звернення 2 до депутата', 0, 1, 8, 'new', NULL, NULL),
(28, '2017-02-17 13:42:05', 'custom', '', 'Тестове звернення', 0, 1, 2, 'answered', 'Відповідь на Тестове звернення', NULL),
(29, '2017-02-17 13:42:29', 'custom', '', 'тест 2', 1, 1, 2, 'new', NULL, NULL),
(30, '2017-02-17 14:03:08', 'custom', '', 'тестуемо', 1, 1, 2, 'new', NULL, NULL),
(31, '2017-02-17 14:05:15', 'custom', '', 'тестуемо далі', 1, 1, 2, 'new', NULL, NULL),
(32, '2017-02-17 14:06:30', 'custom', '', 'тестуемо далі 3', 1, 1, 8, 'new', NULL, NULL),
(33, '2017-02-17 14:09:12', 'custom', '', 'тестуемо далі 4', 1, 1, 2, 'new', NULL, NULL),
(34, '2017-02-17 14:16:44', 'custom', '', 'тестуемо далі 5', 1, 1, 8, 'new', NULL, NULL),
(36, '2017-02-17 14:23:50', 'custom', '', 'тестуемо далі 7', 1, 79, 8, 'not_ready', NULL, NULL),
(37, '2017-02-17 14:42:14', 'custom', '', 'Фынальний запит', 1, 1, 2, 'new', NULL, NULL),
(38, '2017-02-22 13:39:14', 'custom', '', 'fjgbfbgufhbgufhgufhgfugh', 1, 1, 2, 'answered', NULL, NULL),
(39, '2017-02-24 13:42:05', 'material', '', 'Матеріальна допомога', 0, 1, 2, NULL, NULL, NULL),
(40, '2017-03-07 20:56:00', 'custom', '', 'на улицах темно', 1, 40, 7, 'answered', 'нечего ночью шляться', '2017-03-07 21:45:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
