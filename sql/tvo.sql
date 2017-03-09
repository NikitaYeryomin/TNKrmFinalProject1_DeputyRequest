-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Мар 09 2017 г., 20:19
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
-- Структура таблицы `tvo`
--

CREATE TABLE IF NOT EXISTS `tvo` (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT COMMENT 'власне номер округу',
  `electorate` smallint(4) NOT NULL COMMENT 'орієнтовна кількість виборців',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=44 ;

--
-- Дамп данных таблицы `tvo`
--

INSERT INTO `tvo` (`id`, `electorate`) VALUES
(1, 3414),
(2, 3930),
(3, 3863),
(4, 2950),
(5, 2361),
(6, 3980),
(7, 4098),
(8, 2306),
(9, 3883),
(10, 5177),
(11, 2760),
(12, 2254),
(13, 4355),
(14, 4003),
(15, 4142),
(16, 3709),
(17, 3118),
(18, 3362),
(19, 3477),
(20, 3090),
(21, 3404),
(22, 4194),
(23, 4257),
(24, 3348),
(25, 4045),
(26, 3572),
(27, 3985),
(28, 4095),
(29, 4164),
(30, 4440),
(31, 4244),
(32, 4376),
(33, 3729),
(34, 3886),
(35, 3392),
(36, 3380),
(37, 3283),
(38, 3334),
(39, 2630),
(40, 3789),
(41, 3045),
(42, 4142);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
