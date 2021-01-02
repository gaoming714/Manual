# 配置一个msys2
> personal way

---
## lite context
1. mkdir /root
2. cp pacman_source / mintty / vimrc
3. run msys2 , wait for the terminal prompt, close msys2
4. run msys2, install packages (ln -s /bin/vim.exe /bin/vi)
pacman -S vim zsh git p7zip rsync winpty
5. edit nsswitch.conf, change home_path to /root
6. edit nsswitch.conf, change shell to zsh (db_shell: /usr/bin/zsh)
7. install on-my-zsh, sh install.sh
8. install vimrc
9. configure zshrc
10. activate poetry
11. ready for tar,  cleandb , clean home
12. cp font to folder


## pacman_source

configure source

```shell
/etc/pacman.d/mirrorlist.mingw32
Server = http://mirrors.ustc.edu.cn/msys2/mingw/i686

/etc/pacman.d/mirrorlist.mingw64
Server = http://mirrors.ustc.edu.cn/msys2/mingw/x86_64

/etc/pacman.d/mirrorlist.msys
Server = http://mirrors.ustc.edu.cn/msys2/msys/$arch
```

 [mirrorlist.mingw32](..\delta\msys2_source\pacman.d\mirrorlist.mingw32) 

 [mirrorlist.mingw64](..\delta\msys2_source\pacman.d\mirrorlist.mingw64) 

 [mirrorlist.msys](..\delta\msys2_source\pacman.d\mirrorlist.msys) 

configure PATH
---

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

## configure mintty theme

~/.minttyrc

```shell
BoldAsFont=-1
CursorType=block
Font=Source Code Pro Semibold
FontHeight=12
FontWeight=600
Scrollbar=none
Columns=100
Rows=35
Locale=C
Charset=UTF-8

ForegroundColour=238,238,238
BackgroundColour=48,10,36
CursorColour=138,226,52

Black=46,52,54
BoldBlack=85,87,83
Red=204,0,0
BoldRed=239,41,41
Green=78,154,6
BoldGreen=138,226,52
Yellow=196,160,0
BoldYellow=252,233,79
Blue=52,101,164
BoldBlue=114,159,207
agenta=117,80,123
BoldMagenta=173,127,168
Cyan=6,152,154
BoldCyan=52,226,226
White=211,215,207
BoldWhite=238,238,236

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
curl
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

Download plug.vim and put it in the "autoload" directory.
~/.vim/autoload/plug.vim

edit ~/.vimrc
```
set nocompatible              " be iMproved, required
call plug#begin('~/.vim/plugged')

" Make sure you use single quotes

" theme
Plug 'morhetz/gruvbox'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

" window
Plug 'scrooloose/nerdtree'
Plug 'bronson/vim-trailing-whitespace'
Plug 'tpope/vim-fugitive'
Plug 'junegunn/gv.vim'

" enhance
Plug 'tpope/vim-commentary'
Plug 'tpope/vim-surround'
Plug 'ervandew/supertab'
Plug 'godlygeek/tabular'

" Initialize plugin system
call plug#end()

" Basic Settings
set nu
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set shiftround
set smartindent
set cursorline
set backspace=indent,eol,start
set numberwidth=5

" Theme
set t_Co=256
syntax enable
set background=dark
colorscheme gruvbox

" Airline
let g:airline_theme="luna"
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#wordcount#filetypes = 0

" NERDTree
map <C-n> :NERDTreeToggle<CR>
```

open vi ,then run Vundle

	:PlugInstall

## 若需要打包

升级系统
pacman -Syu

删除所有缓存
pacman -Scc

## Plus alias

source .zshrc

```shell
# Python
PATH_python=/d/Portable/Python/python-3.8.5.amd64
PATH=${PATH_python}:${PATH_python}/Scripts:$PATH

# Node.js
PATH_node=/d/Portable/nodejs
PATH=${PATH_node}:$PATH

# Nightly
PATH_node=/d/Portable/Nightly
PATH=${PATH_node}:$PATH

alias @@="winpty"
alias @create="bash create_activate"
alias @act="source activate"
alias @dct="deactivate"
alias @venv="source /d/bin/AlphaBeta/.venv/Scripts/activate"
alias @@@="cd /d/bin/AlphaBeta"
```

alias function:
```shell
##
# function python(){ winpty "${PATH_python}/python" "${PATH_python}/Scripts/$@" ;}
# function node(){ winpty "/d/Portable/nodejs/$@" ;}

```
## activate poetry
poetry config --list
poetry config cache-dir /d/Portable/Python

cp Nightly/create_activate

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

