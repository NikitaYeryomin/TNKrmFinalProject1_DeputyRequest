-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Фев 11 2017 г., 11:13
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
-- Структура таблицы `user`
--

CREATE TABLE IF NOT EXISTS `user` (
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=80 ;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`userid`, `firstname`, `secondname`, `lastname`, `hash`, `email`, `phone`, `city_id`, `street`, `home`, `tvo_id`, `joindate`, `role`) VALUES
(1, 'Алексей', 'Владимирович', 'Поддубный', '$2y$10$WB9S1eZfJ6QAWuuYGDn1l.KHtRenSjMQ4G.A61G/zi66Cfmu6JWEi', 'usatij.alex@gmail.com', '+380955218618', 1, 'Беляева', 111, 140973, '2016-10-24 23:38:53', 'admin'),
(20, 'Alex', '', 'Poddubny', '$2y$10$Wj3Tq29gXH7XyIqXIjDprejB1RVKR7mzq8Z888wVv0T1qtvSHJcE6', 'usatij@yandex.ru', '', 1, 'проспект Мира', 10, 0, '2016-10-24 20:30:29', 'user'),
(28, 'Alex Poddubny', '', '', '$2y$10$XQbCmdUNs.iN.i97VM6quuOlUvGJHlLocg57.pGjSWxedgF/fVJNq', '1@gmail.com', '2', 1, '', 0, 0, '2016-11-05 23:02:47', 'admin'),
(33, 'Алексей', 'Владимирович', 'Поддубный', '$2y$10$PrAOCT9X21jHn2ez1Lnj2O7uBKpj2YW.AwFKhMoCgzquqjEx1QSGW', 'usatij@yandex.ua', '+380955218618', 1, 'Бєляєва', 111, 0, '2016-11-20 21:59:52', 'cityadmin'),
(35, 'Никита', '', 'Еремин', '$2y$10$TRepFPZ/djz50BgMdpBzZOu2fWhzWtgWtFL.Sn.WFnVPchWKJJkE.', 'nikyer@gmail.com', '0954598132', 1, '', 0, 0, '2016-11-26 21:15:10', 'admin'),
(40, 'по призванию своему — библиотекарь', '', 'Известный экономист,', '$2y$10$iereC3qx/ix0hiAvse64AOgTLd697CzOrzCaKH1EeItkqBPmjAJD2', 'mail@mail.cpy', '', 1, '', 0, 0, '2016-11-27 16:50:48', 'admin'),
(54, 'Семен', 'Семенович', 'Горбунков', '$2y$10$PKYDbibtygha6.pLq321nO1wXhgxctIPG999ux/vgNCB3Fqb5vKyG', 'gorb@gmail.com', '+380951234567', 1, 'Мира', 111, 0, '2017-01-09 13:11:39', 'user'),
(62, 'Лафайет', 'Лафайетович', 'О''Лири', '$2y$10$ICrDZiboGrGjbXgJugmq.e/bCpthEnZNoyW5OWdP5f7gm0Pub7oqq', 'oliri@gmail.com', '+380959876543', 1, 'Днепровская', 2, 0, '2017-01-11 00:21:54', 'user'),
(64, 'Полиграф', 'Полиграфыч', 'Шариков', '$2y$10$UcKJGx/CgMQ7M7YX.QT8deQ8yIhFCwzLNst01yNIn4zOuLzCxVaC.', 'sharik@gmail.com', '+380959999999', 1, 'Московська', 12, 0, '2017-01-13 00:25:23', 'deputy'),
(65, 'Шрайк', 'Шрайк', 'Шрайк', '$2y$10$Nf1WPPBL66.AWtXqObeAWO6sw7a6.JnhYfbt2bRuwzxan.8Kg.sfq', 'shrike@gmail.com', '+380951111111', 2, 'Гиперион', 12, 0, '2017-01-13 00:33:00', 'user'),
(77, 'Грициан', 'Таврический', 'Попандопуло', '$2y$10$76Zhgs8NwsX8smQ4BphqM.z7iK1mF/cCDGq92Hu8GNSozh73un1Ai', 'ee@gmail.com', '1111111111111', 1, 'bbbbbbbbbb', 125, 0, '2017-01-13 00:56:10', 'admin'),
(79, 'Полиграф', 'Полиграфович', 'Шариков', '$2y$10$dLD/Z5WFiI.PyS9DYu/quOG3AdRQRH/jWFxqa4kqs50KX4.EuvvKW', 'sharikoff@gmail.com', '+380999874563', 1, 'Бикова', 15, 0, '2017-01-27 11:59:35', 'user');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
