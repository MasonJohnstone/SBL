SHOW databases;

USE Application;

SHOW TABLES;

UPDATE Players SET username = NULL WHERE email = 'noname@gmail.com';

SELECT * FROM Players;

DESCRIBE Players;
DESCRIBE Teams;
DESCRIBE Region;


RENAME TABLE Region TO Regions;


