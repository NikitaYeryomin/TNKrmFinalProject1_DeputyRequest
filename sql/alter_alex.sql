ALTER TABLE  `city` DROP  `cover` ,
DROP  `embleme` ;

ALTER TABLE  `city` CHANGE  `active`  `active` BIT( 1 ) NOT NULL COMMENT  'Подключение к системе';ALTER TABLE  `city` CHANGE  `active`  `active` BIT( 1 ) NOT NULL COMMENT  'Подключение к системе';