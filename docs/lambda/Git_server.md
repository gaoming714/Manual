# Git server

> [!TIP]
> build a git server
> the easy to build a server for guys with same permission on Linux
> on Linux

## install git & configure
```shell
	apt install git
	yum install git
```

add user name git, it is only used when needing RSA

>Here I just used this user as a folder  `/home/git/`

```shell
useradd -d /home/git git
passwd git
```

edit /etc/passwd

> git:x:1000:1000::/home/git:/usr/bin/git-shell

## Initialized empty Git repository
> it is a repository that doesn’t contain a working directory (name.git)
> the --bare means that it is only the .git part without working directory.

Initialized empty Git repository in /home/git/name.git/

```shell
git init --bare name.git
```

or If there exists a repositoty
make a new bare repository and scp to server

```shell
git clone --bare my_project my_project.git
scp -r my_project.git user@git.example.com:/home/git
```


## anyone and clone through SSH

```shell
git clone root@domain:/home/git/name.git
```


