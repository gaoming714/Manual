## basic

apt update
apt install zsh
apt install git
apt install vim

## add user

adduser lambda
@ /etc/passwd
    /bin/bash > /bin/zsh
@ /etc/sudoer
    sudo:>..... + lambda

## zsh oh-my-zsh

$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
$ sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

## vimrc
cp .vimrc to ~

:pluginstall

## python
download miniconda
./miniconda > /home/lambda/Python
ln -s /home/lambda/Python/bin/conda /home/lambda/bin/conda

conda install poetry
conda update --all
ln -s /home/lambda/Python/bin/poetry /home/lambda/bin/poetry

note: poetry as the unique interface

## nodejs
apt install nodejs npm

