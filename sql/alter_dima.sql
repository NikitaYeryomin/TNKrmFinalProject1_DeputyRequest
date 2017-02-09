/* 08.02.2017 */

ALTER TABLE request ADD public_appeal TINYINT NOT NULL AFTER `text`;
ALTER TABLE request ADD type ENUM ('custom', 'material') NOT NULL AFTER `adddate`;