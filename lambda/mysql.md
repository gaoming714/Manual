# MySQL

> command

---

## system config bind-address, remove following.

/etc/mysql/mysql.conf.d/mysqld.cnf
bind-address      = 127.0.0.1

## CREATE USER

CREATE USER 'jeffrey'@'localhost' IDENTIFIED BY 'password';

CREATE USER 'jeffrey'@'%' IDENTIFIED BY '';

## SHOW USER

USE mysql;
SELECT host,user FROM user;

## DROP USER

DROP USER 'jeffrey'@'localhost';

## CREATE GRANTS

CREATE USER 'jeffrey'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON db1.table1 TO 'jeffrey'@'localhost';

## SHOW GRANTS

SHOW GRANTS FOR 'jeffrey'@'localhost';

## REVOKE

REVOKE ALL ON *.* FROM 'jeffrey'@'localhost';
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'jeffrey'@'localhost';

REVOKE ALL ON *.* FROM 'lambda'@'%';
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'jeffrey'@'localhost';

## flush privileges

flush privileges;

