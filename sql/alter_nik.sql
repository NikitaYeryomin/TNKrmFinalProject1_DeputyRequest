/*15.02.2017*/
ALTER TABLE request MODIFY public_appeal TINYINT(1);

/*23.02.2017*/
/*not_ready - для запросов, создание которых еще не завершено пользователем (например, материальная помощь)*/
ALTER TABLE  `request` CHANGE  `status`  `status` ENUM(  'new',  'answered',  'rejected', 'not_ready' );