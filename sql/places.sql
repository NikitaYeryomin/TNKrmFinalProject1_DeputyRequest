-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Фев 19 2017 г., 13:20
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
-- Структура таблицы `places`
--

CREATE TABLE IF NOT EXISTS `places` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `latitude` decimal(7,4) NOT NULL,
  `longitude` decimal(7,4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=56 ;

--
-- Дамп данных таблицы `places`
--

INSERT INTO `places` (`id`, `address`, `latitude`, `longitude`) VALUES
(1, 'вул. Леоніда Бикова, 7 (школа № 16)', '48.7479', '37.6146'),
(2, 'вул. Софіївська, 136, смт Біленьке (школа № 26)', '48.7587', '37.6154'),
(3, 'вул. Волховська, 1, смт Ясногірка (школа № 30)', '48.7720', '37.5530'),
(4, 'вул. Ольги Кобилянської, 1 (школа № 19)', '48.7653', '37.5906'),
(5, 'вул. Дніпровська, 14 (міська лікарня № 2)', '48.7621', '37.5934'),
(6, 'вул. Архангельська, 11 (українська гімназія)', '48.7610', '37.5930'),
(7, 'вул. Хабаровська, 40 (школа № 10)', '48.7521', '37.6140'),
(8, 'вул. Дніпровська, 7 (вище професійне металургійне училище)', '48.7631', '37.5930'),
(9, 'вул. Волгодонська, 22, смт Шабельківка (школа № 32)', '48.7493', '37.4939'),
(10, 'вул. Українська, 81, смт Малотаранівка (будинок культури «Міленіум»)', '48.6578', '37.5165'),
(11, 'вул. Перепелиці, 39, смт Малотаранівка (школа № 13)', '48.6623', '37.5099'),
(12, 'вул. Лівобережна, 352, смт Ясногірка (школа № 21)', '48.7814', '37.5575'),
(13, 'вул. Білгородська, 95, смт Красноторка (школа № 33)', '48.6849', '37.5280'),
(14, 'вул. Кемеровська, 31А (бібліотека № 13 імені Івана Франка)', '48.6983', '37.4705'),
(15, 'вул. Катерини Білокур, 14 (школа № 31)', '48.7056', '37.5305'),
(16, 'вул. Михайла Горяйнова, 45 (школа № 23)', '48.7197', '37.5249'),
(17, 'вул. Шкільна, 9 (палац культури імені Бикова)', '48.7240', '37.5336'),
(18, 'вул. Тріумфальна, 9 (школа № 11)', '48.7240', '37.5384'),
(19, 'вул. Велика Садова, 75 (школа № 6)', '48.7268', '37.5348'),
(20, 'вул. Райдужна, 13 (школа № 1)', '48.7340', '37.5301'),
(21, 'вул. Велика Садова, 99 (машинобудівний коледж)', '48.7338', '37.5336'),
(22, 'вул. Молодіжна, 1 (клуб «Надія»)', '48.6766', '37.6184'),
(23, 'вул. Олега Кошового, 18 (школа № 18)', '48.7050', '37.5870'),
(24, 'вул. Танкістів, 112 (школа № 20)', '48.7007', '37.5617'),
(25, 'вул. Центральна, 5 (кінотеатр «Машинобудівник»)', '48.7198', '37.5634'),
(26, 'вул. Благодатна, 76 (школа № 17)', '48.7233', '37.5732'),
(27, 'вул. Конрада Гампера, 5 (КП «ДРУАС»)', '48.7213', '37.5548'),
(28, 'вул. Поштова, 2 (вище професійне металургійне училище)', '48.7225', '37.5439'),
(29, 'вул. Маяковського, 9 (палац культури «Будівельник»)', '48.7502', '37.5896'),
(30, 'вул. Маяковського, 19 (школа № 15)', '48.7491', '37.5926'),
(31, 'вул. Героїв України, 5 (вище професійне училище № 14)', '48.7481', '37.6011'),
(32, 'вул. Василя Стуса, 19 (школа № 12)', '48.7452', '37.5951'),
(33, 'вул. Ювілейна, 6 (професійний ліцей № 42)', '48.7377', '37.6030'),
(34, 'вул. Двірцева, 57А (школа № 8)', '48.7327', '37.6097'),
(35, 'бульв. Краматорський, 17 (школа № 9)', '48.7265', '37.6095'),
(36, 'вул. Паркова, 62 (вище професійне будівельне училище)', '48.7221', '37.6090'),
(37, 'вул. Остапа Вишні, 15 (школа № 2)', '48.7200', '37.5956'),
(38, 'вул. Наді Курченко, 19 (школа № 3)', '48.7229', '37.5987'),
(39, 'вул. Ювілейна, 62 (центр професійно-технічної освіти)', '48.7247', '37.5929'),
(40, 'вул. Двірцева, 48 (школа № 4)', '48.7291', '37.6053'),
(41, 'вул. Ювілейна, 46 (школа № 35)', '48.7312', '37.5953'),
(42, 'вул. Ювілейна, 44 (школа мистецтв № 1)', '48.7312', '37.5969'),
(43, 'вул. Паркова, 12А (центр позашкільної роботи)', '48.7285', '37.5889'),
(44, 'вул. Богдана Хмельницького, 25 (школа № 25)', '48.7353', '37.5892'),
(45, 'вул. Богдана Хмельницького, 28 (школа № 24)', '48.7357', '37.5842'),
(46, 'бульв. Машинобудівників, 36 (технологічний технікум)', '48.7322', '37.5732'),
(47, 'вул. Академічна, 72 (Донбаська державна машинобудівна академія, 1-й корпус)', '48.7329', '37.5787'),
(48, 'пл. Миру, 1 (палац культури і техніки «НКМЗ»)', '48.7384', '37.5860'),
(49, 'вул. Двірцева, 3 (школа № 22)', '48.7374', '37.5898'),
(50, 'вул. Василя Стуса, 40 (школа № 5)', '48.7410', '37.5903'),
(51, 'вул. Архипа Куїнджі, 1А (протитуберкульозний диспансер)', '48.7554', '37.5932'),
(52, 'вул. Катерини Білокур, 1А (психіатрична лікарня)', '48.7050', '37.5249'),
(53, 'вул. Героїв України, 17 (міська лікарня № 3)', '48.7442', '37.5980'),
(54, 'вул. Олекси Тихого, 17 (міська лікарня № 1)', '48.7216', '37.5639'),
(55, 'вул. Олекси Тихого, 31 (онкологічний диспансер)', '48.7234', '37.5647');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
