-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Янв 29 2017 г., 17:41
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
-- Структура таблицы `parties`
--

CREATE TABLE IF NOT EXISTS `parties` (
  `id` tinyint(1) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `genitive_case` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `parties`
--

INSERT INTO `parties` (`id`, `title`, `genitive_case`) VALUES
(1, 'політична партія «Опозиційний блок»', 'політичної партії «Опозиційний блок»'),
(2, 'політична партія «Наш край»', 'політичної партії «Наш край»'),
(3, 'партія «блок Петра Порошенка „Солідарність”»', 'партії «блок Петра Порошенка „Солідарність”»'),
(4, 'партія пенсіонерів України', 'партії пенсіонерів України');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
