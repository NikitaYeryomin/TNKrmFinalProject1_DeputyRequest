ALTER TABLE  `city` DROP  `cover` ,
DROP  `embleme` ;

ALTER TABLE  `city` CHANGE  `active`  `active` BIT( 1 ) NOT NULL COMMENT  'Подключение к системе';ALTER TABLE  `city` CHANGE  `active`  `active` BIT( 1 ) NOT NULL COMMENT  'Подключение к системе';
20.02.2017
ALTER TABLE  `request` CHANGE  `status`  `status` ENUM(  'new',  'answered',  'rejected' ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT  'new';
ALTER TABLE  `request` ADD  `response` VARCHAR( 255 ) NULL DEFAULT NULL ;
ALTER TABLE  `request` CHANGE  `reception`  `reception` TIMESTAMP NULL ;
ALTER TABLE  `request` CHANGE  `type`  `type` ENUM(  'custom',  'material',  'living',  'family' ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ;
26.02.2017
ALTER TABLE  `request` CHANGE  `status`  `status` ENUM(  'new',  'answered',  'rejected',  'not_ready' ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT  'new';
5.03.2017
/*подтверждение депутата*/
/*ALTER TABLE  `deputies` ADD  `checked` TINYINT NOT NULL DEFAULT  '0';*/
20.03.2017
/* Статус запроса review */
ALTER TABLE  `request` CHANGE  `status`  `status` ENUM(  'new',  'answered',  'rejected',  'not_ready',  'review' ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT  'new';