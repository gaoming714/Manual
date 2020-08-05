# 配置一个msys2
> personal way

---

## context

1. run msys2 , close msys2
2. cp pacman_source / mintty / vimrc 
3. edit nsswitch.conf, change home_path to root
4. run msys2
5. install packages (ln -s /bin/vim.exe /bin/vi)
6. install on-my-zsh
7. edit nsswitch.conf, change shell to zsh
8. install vim
9. configure zshrc
10. pacman update
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

 [mirrorlist.mingw32](..\material\msys2_source\pacman.d\mirrorlist.mingw32) 

 [mirrorlist.mingw64](..\material\msys2_source\pacman.d\mirrorlist.mingw64) 

 [mirrorlist.msys](..\material\msys2_source\pacman.d\mirrorlist.msys) 

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
Rows=30
Locale=C
Charset=UTF-8

ForegroundColour=  235, 219, 178
BackgroundColour=    0,  43,  54
CursorColour    =   65, 255,  65
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

make git_folder to folder 

```shell
mkdir -p ~/.vim/bundle/
```
git clone files

```shell
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

copy .vimrc to /home

```vimrc
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
" theme
Plugin 'morhetz/gruvbox'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
" beauty
Plugin 'scrooloose/nerdtree'
Plugin 'bronson/vim-trailing-whitespace'
Plugin 'airblade/vim-gitgutter'
Plugin 'yggdroot/indentline'
" edit
Plugin 'ervandew/supertab'
Plugin 'tpope/vim-surround'
Plugin 'godlygeek/tabular'
Plugin 'scrooloose/nerdcommenter'
Plugin 'mattn/emmet-vim'
Plugin 'jiangmiao/auto-pairs'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line

" Basic settings
set nu
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set shiftround
set smartindent
set cursorline
set numberwidth=5
set backspace=indent,eol,start

" Theme
set t_Co=256
set background=dark
syntax enable
colorscheme gruvbox
" let g:solarized_termcolors=256
" colorscheme solarized

" airline
let g:airline_theme="luna"
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#wordcount#filetypes = 0

" Map
let g:user_emmet_leader_key='<C-Y>'
map <C-n> :NERDTreeToggle<CR>
map \\ \c<space>
```

open vi ,then run Vundle

	:PluginInstall

## 若需要打包

升级系统
pacman -Syu

删除所有缓存
pacman -Scc

## Plus alias

source .zshrc

```shell
# Python
PATH_python=/d/Portable/Python/python-3.7.6.amd64
PATH=${PATH_python}:${PATH_python}/Scripts:$PATH

# Node.js
PATH_node=/d/Portable/nodejs
PATH=${PATH_node}:$PATH

# Nightly
PATH_nightly=/d/Portable/Nightly
PATH=${PATH_nightly}:$PATH

# alias
alias @@="winpty"
alias python="winpty ipython"
alias pip="winpty pip"
alias pytest="winpty pytest"
alias npm="winpty npm.cmd"
alias node="winpty node"
alias pm2="winpty pm2.cmd"
```

alias function:
```shell
##
# function python(){ winpty "${PATH_python}/python" "${PATH_python}/Scripts/$@" ;}
# function node(){ winpty "/d/Portable/nodejs/$@" ;}

```


## README.md  for  Msys2


This is a custom version of msys2

```
HOME PATH   is /root
source      is mirrors.ustc.edu.cn
manager     is pacman
vim         is built with vundle
Shell       is ZSH with on-my-zsh
Font        is SourceCodePro-Semibold
```

Install SourceCodePro-Semibold.otf at first.

Python & nodejs can be append to .zshrc:

```shell
# Python
PATH_python=/d/Portable/Python/python-3.7.6.amd64
PATH=${PATH_python}:${PATH_python}/Scripts:$PATH

# Node.js
PATH_node=/d/Portable/nodejs
PATH=${PATH_node}:$PATH

# Nightly
PATH_nightly=/d/Portable/Nightly
PATH=${PATH_nightly}:$PATH

# alias
alias @@="winpty"
alias python="winpty ipython"
alias pip="winpty pip"
alias pytest="winpty pytest"
alias npm="winpty npm.cmd"
alias node="winpty node"
alias pm2="winpty pm2.cmd"
```

or edit & run `source /plus` to wake up them
