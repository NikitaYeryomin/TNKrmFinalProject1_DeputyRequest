ALTER TABLE  `city` DROP  `cover` ,
DROP  `embleme` ;

ALTER TABLE  `city` CHANGE  `active`  `active` BIT( 1 ) NOT NULL COMMENT  'Подключение к системе';ALTER TABLE  `city` CHANGE  `active`  `active` BIT( 1 ) NOT NULL COMMENT  'Подключение к системе';
20.02.2017
ALTER TABLE  `request` CHANGE  `status`  `status` ENUM(  'new',  'answered',  'rejected' ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT  'new';
ALTER TABLE  `request` ADD  `response` VARCHAR( 255 ) NULL DEFAULT NULL ;
ALTER TABLE  `request` CHANGE  `reception`  `reception` TIMESTAMP NULL ;