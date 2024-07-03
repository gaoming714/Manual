# msys2 config

> [!TIP]
> My solution

## lite context

0. mkdir /root
1. run msys2 , wait for the terminal prompt, close msys2
2. run msys2, install packages  `pacman -S vim zsh git p7zip rsync winpty`
3. alias vim to vi `ln -s /bin/vim.exe /bin/vi`
4. edit nsswitch.conf, change home_path to /root
5. edit nsswitch.conf, change shell to zsh (db_shell: /usr/bin/zsh)
6. install on-my-zsh, `sh install.sh`
7. install vimrc
8. configure zshrc
9. activate poetry
10. cp font to folder


## pacman_source

configure source (deprecated)

```shell
/etc/pacman.d/mirrorlist.mingw32
Server = http://mirrors.ustc.edu.cn/msys2/mingw/i686

/etc/pacman.d/mirrorlist.mingw64
Server = http://mirrors.ustc.edu.cn/msys2/mingw/x86_64

/etc/pacman.d/mirrorlist.msys
Server = http://mirrors.ustc.edu.cn/msys2/msys/$arch
```
config file link:

[mirrorlist.mingw32](/delta/msys64_build/root/src/mirrorlist.mingw32) 

[mirrorlist.mingw64](/delta/msys64_build/root/src/mirrorlist.mingw64) 

[mirrorlist.msys](/delta/msys64_build/root/src/mirrorlist.msys) 

## configure PATH

mkdir /root

configure nsswitch.conf

change db_home to /root

```shell
# Begin /etc/nsswitch.conf

passwd: files db
group: files db

db_enum: cache builtin

db_home: /root
db_shell: /usr/bin/bash
db_gecos: cygwin desc

# End /etc/nsswitch.conf
```

## Install packages

pacman -S vim       (ln -s /bin/vim.exe /bin/vi)
pacman -S zsh
pacman -S git
pacman -S p7zip
pacman -S rsync
pacman -S winpty

## install oh-my-zsh

At first, make sure db_home is /root
```shell
with curl
    sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
or wget
    sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
or manual
    git clone https://github.com/ohmyzsh/ohmyzsh.git ~/tmp
    sh ~/tmp/tools/install.sh
or mine
    copy github.com/ohmyzsh/ohmyzsh.git:tools/install.sh to /root/install.sh
    sh /root/install.sh
```

update configure PATH nsswitch.conf
```
db_shell: /usr/bin/zsh
```

## Install VIM

copy .vimrc to ~/.vimrc
copy .vim/autoload to ~/.vim/  (Enable autoload)

[.vim/autoload](/delta/vim/.vim/autoload) 
[.vimrc](/delta/vim/.vimrc)


## 若需要打包

升级系统
pacman -Syu

删除所有缓存
pacman -Scc

## Plus zshrc

copy .zshrc.win to ~/.zshrc
[.zshrc.win](/delta/vim/.vimrc)


## README.md  for  Msys2

This is a custom version of msys2

```
HOME PATH   is /root
source      is mirrors.ustc.edu.cn
manager     is pacman
vim         is built with vim-plug
Shell       is ZSH with on-my-zsh
Font        is SourceCodePro-Semibold
```

Install SourceCodePro-Semibold.otf at first.

Python & nodejs can be append to .zshrc:

