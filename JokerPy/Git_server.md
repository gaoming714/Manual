Git server
===

the easy to build a server for guys with same permission
on Linux

###install git
	apt install git
	yum install git

###add user name git, it is only used when needing RSA
Here I just used this user as a folder
/home/git/

---

###Initialized empty Git repository, and it is a repository that doesn’t contain a working directory (name.git)
the --bare means that it is only the .git part without working directory.

	git init --bare name.git

>git init --bare afcd.git
 Initialized empty Git repository in /home/git/name.git/


###If there exists a repositoty
make a new bare repository and scp to server

	git clone --bare my_project my_project.git
	scp -r my_project.git user@git.example.com:/home/git


---

###anyone and clone through SSH
	git clone root@domain:/home/git/name.git

