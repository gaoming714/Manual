---
icon: fab fa-steam
---

# Server Debian or ubuntu

::: tip
Install server
:::

## basic

```
apt update
apt install zsh
apt install git
apt install vim
```

## add user

adduser lambda
/etc/passwd
> /bin/bash > /bin/zsh

```
/etc/group
sudo gpasswd -a <username> <groupname>
sudo gpasswd -a lambda sudo
```

## zsh & oh-my-zsh

[zsh.md](/lambda/zsh.md)

## vimrc

[vim.md](/lambda/vi.md)

## python

download miniconda

```shell
./miniconda > /home/lambda/Python

conda install poetry
conda update --all
ln -s /home/lambda/Python/bin/poetry /home/lambda/bin/poetry
```

note: `poetry` is the unique interface

## nodejs

install nvm & nodejs

