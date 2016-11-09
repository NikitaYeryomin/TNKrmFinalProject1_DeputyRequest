-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Окт 20 2016 г., 13:51
-- Версия сервера: 5.5.50-0ubuntu0.14.04.1
-- Версия PHP: 5.5.9-1ubuntu4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `pset7`
--

-- --------------------------------------------------------

--
-- Структура таблицы `history`
--

CREATE TABLE IF NOT EXISTS `history` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `action` varchar(255) NOT NULL,
  `datetime` datetime NOT NULL,
  `symbol` varchar(255) NOT NULL,
  `shares` varchar(255) NOT NULL,
  `price` decimal(65,4) NOT NULL DEFAULT '0.0000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Дамп данных таблицы `history`
--

INSERT INTO `history` (`id`, `user_id`, `action`, `datetime`, `symbol`, `shares`, `price`) VALUES
(1, 9, 'BUY', '0000-00-00 00:00:00', 'AA', '20', 9.7000),
(2, 9, 'BUY', '0000-00-00 00:00:00', 'FREE', '5', 1.1500),
(3, 9, 'BUY', '2016-09-26 00:00:00', 'AA', '5', 9.6900),
(4, 9, 'SELL', '2016-09-26 19:58:05', 'AA', '', 9.6850),
(5, 9, 'SELL', '2016-09-26 19:59:44', 'AP', '25', 11.0000),
(6, 9, 'SELL', '2016-09-26 20:00:41', 'FREE', '15', 1.1500),
(7, 9, 'SELL', '2016-09-26 20:02:27', 'MS', '20', 31.0100),
(8, 9, 'BUY', '2016-09-26 20:08:41', 'FREE', '250', 1.1500),
(9, 9, 'SELL', '2016-09-26 20:08:46', 'FREE', '250', 1.1500),
(10, 9, 'BUY', '2016-09-26 20:10:23', 'FREE', '25', 1.1500),
(11, 21, 'BUY', '2016-09-29 15:42:28', 'FREE', '10', 1.1500),
(12, 21, 'SELL', '2016-09-29 15:42:49', 'FREE', '10', 1.1500);

-- --------------------------------------------------------

--
-- Структура таблицы `portfolios`
--

CREATE TABLE IF NOT EXISTS `portfolios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `symbol` varchar(255) NOT NULL,
  `shares` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`symbol`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Дамп данных таблицы `portfolios`
--

INSERT INTO `portfolios` (`id`, `user_id`, `symbol`, `shares`) VALUES
(2, 18, 'FREE', 10),
(21, 9, 'FREE', 25);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cash` decimal(65,4) unsigned NOT NULL DEFAULT '0.0000',
  `username` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `cash`, `username`, `hash`) VALUES
(1, 10000.0000, 'andi', '$2y$10$c.e4DK7pVyLT.stmHxgAleWq4yViMmkwKz3x8XCo4b/u3r8g5OTnS'),
(2, 10000.0000, 'caesar', '$2y$10$0p2dlmu6HnhzEMf9UaUIfuaQP7tFVDMxgFcVs0irhGqhOxt6hJFaa'),
(3, 10000.0000, 'eli', '$2y$10$COO6EnTVrCPCEddZyWeEJeH9qPCwPkCS0jJpusNiru.XpRN6Jf7HW'),
(4, 10000.0000, 'hdan', '$2y$10$o9a4ZoHqVkVHSno6j.k34.wC.qzgeQTBHiwa3rpnLq7j2PlPJHo1G'),
(5, 10000.0000, 'jason', '$2y$10$ci2zwcWLJmSSqyhCnHKUF.AjoysFMvlIb1w4zfmCS7/WaOrmBnLNe'),
(6, 10000.0000, 'john', '$2y$10$dy.LVhWgoxIQHAgfCStWietGdJCPjnNrxKNRs5twGcMrQvAPPIxSy'),
(7, 10000.0000, 'levatich', '$2y$10$fBfk7L/QFiplffZdo6etM.096pt4Oyz2imLSp5s8HUAykdLXaz6MK'),
(8, 10000.0000, 'rob', '$2y$10$3pRWcBbGdAdzdDiVVybKSeFq6C50g80zyPRAxcsh2t5UnwAkG.I.2'),
(9, 110210.8950, 'skroob', '$2y$10$395b7wODm.o2N7W5UZSXXuXwrC0OtFB17w4VjPnCIn/nvv9e4XUQK'),
(10, 10000.0000, 'zamyla', '$2y$10$UOaRF0LGOaeHG4oaEkfO4O7vfI34B1W23WqHr9zCpXL68hfQsS3/e'),
(18, 10000.0000, 'Alex', '$2y$10$3pLnyG0YGZncKJiwD0Xu3.b7rlZwyZ4cgXX3kxUc4UJCmiMcv0Xj2'),
(19, 10000.0000, 'AlexPoddubny', '$2y$10$EqbcdAYJpW0V7l.bhqix7e947P9exZhMzssezMz66IbnUMk7sJEP2'),
(21, 20000.0000, 'Alex2', '$2y$10$lLYWp9Yx/8qfhmrqiMu2Z.khJ5NrZ6NHH5WurdveuM1RYLv4w7nq.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
