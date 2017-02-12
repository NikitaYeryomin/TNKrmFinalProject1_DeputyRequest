-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Фев 12 2017 г., 11:04
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
-- Структура таблицы `deputies`
--

CREATE TABLE IF NOT EXISTS `deputies` (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `user_id` smallint(4) DEFAULT NULL COMMENT 'користувач, за яким депутат заходе у систему',
  `surname` varchar(32) NOT NULL COMMENT 'прізвище',
  `name` varchar(16) NOT NULL COMMENT 'ім''я',
  `patronymic` varchar(16) NOT NULL COMMENT 'по-батькові',
  `bio` varchar(600) NOT NULL COMMENT 'відомості',
  `tvoid` tinyint(2) DEFAULT NULL COMMENT '№ ТВО за яким закріплено; 0 – лідер списку',
  `party_id` tinyint(1) NOT NULL COMMENT 'id партії згідно parties',
  `sex` enum('m','f','','') DEFAULT NULL COMMENT 'стать для дієвідмінювання',
  `function` varchar(255) NOT NULL COMMENT 'членство в комісіях та інше',
  `reception` varchar(255) NOT NULL COMMENT 'місце та час прийому громадян',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Дамп данных таблицы `deputies`
--

INSERT INTO `deputies` (`id`, `user_id`, `surname`, `name`, `patronymic`, `bio`, `tvoid`, `party_id`, `sex`, `function`, `reception`) VALUES
(1, NULL, 'Тітова', 'Надія', 'Євгенівна', '456546', 3, 1, 'f', '', ''),
(2, NULL, 'Соболєва', 'Ніна', 'Михайлівна', 'wq', 2, 3, 'f', '', ''),
(3, NULL, 'Разживін', 'Микола', 'Олексійович', '2', 4, 4, 'm', '', ''),
(4, NULL, 'Савченко', 'Наталія', 'Миколаївна', '324', 9, 3, 'f', '', ''),
(5, NULL, 'Єрмольченко', 'Олександр', 'Юрійович', '', 1, 2, 'm', '', ''),
(6, NULL, 'Нечволода', 'Євген', 'Іванович', '', 5, 2, 'm', '', ''),
(7, NULL, 'Бондаренко', 'Володимир', 'Григорович', '', 7, 2, 'm', '', ''),
(8, 64, 'Суков', 'Геннадій', 'Сергійович', 'Громадянин України, народився 26.03.1959 р., освіта вища, безпартійний, ПАТ «Новокраматорський машинобудівний завод», генеральний директор, голова правління.', 0, 1, 'm', 'Член постійной комісії з питань соціально-економічного розвитку, планування, бюджету, фінансів, зовнішньоекономічної діяльності', 'Комітет мікрорайону № 3, вул. Ярослава Мудрого, 48, т. +380(6264) 5-43-28, 2 вівторок місяця, 14.00—16.00'),
(9, NULL, 'Гончаренко', 'Олександр', 'Васильович', '', 9, 2, 'm', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
