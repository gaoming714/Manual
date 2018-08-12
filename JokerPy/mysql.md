Mysql
===


---

###configure message:

	which mysql
/usr/bin/mysql

	/usr/bin/mysql --verbose --help | grep -A 1 'Default options'
```
Default options are read from the following files in the given order:
/etc/mysql/my.cnf /etc/my.cnf ~/.my.cnf
```
这个信息的意思是：
服务器首先读取的是/etc/mysql/my.cnf文件，如果前一个文件不存在则继续读/etc/my.cnf文件，如若还不存在便会去读~/.my.cnf文件
~


###privileges

default user / password is root / ''

login in localhost
use mysql
configure
flush privileges, it makes it work.

	mysql -u root
	use mysql
	select host, user from user;
	update user set host = '%' where host='localhost' and user = 'root';
	update user set password = password('yourpasswd') where host='%' and user = 'root';
	flush privileges;



if there is another localhost, you will login anywhere except localhost.
so rename the localhost.

	update user set host = 'localhost-disable' where host='localhost' user='';

