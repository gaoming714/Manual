配置一个msys2
===

---

configure source
---
/etc/pacman.d/mirrorlist.mingw32
Server = http://mirrors.ustc.edu.cn/msys2/mingw/i686/

/etc/pacman.d/mirrorlist.mingw64
Server = http://mirrors.ustc.edu.cn/msys2/mingw/x86_64/

/etc/pacman.d/mirrorlist.msys
Server = http://mirrors.ustc.edu.cn/msys2/msys/$arch


---


Install packages
---

pacman -S vim       (ln -s /bin/vim.exe /bin/vi)
pacman -S zsh
pacman -S p7zip
pacman -Syu         (disabled)

---
configure PATH
---

mkdir /root

configure nsswitch.conf

    # Begin /etc/nsswitch.conf

    passwd: files db
    group: files db

    db_enum: cache builtin

    db_home: /root
    db_shell: /usr/bin/zsh
    db_gecos: cygwin desc

    # End /etc/nsswitch.conf

reboot


configure LANG
---

configure /etc/profile.d/lang.sh

    test -z "${LC_ALL:-${LC_CTYPE:-$LANG}}" && export LANG=""

---
configure auto-update
---

configure .zshrc
    DISABLE_AUTO_UPDATE="true"

upgrade_oh_my_zsh

---

Install packages
---
pacman -S python3
pacman -S python3-pip
git
oh-my-zsh

    sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

pip install --upgrade pip

---



---

configure theme
---
    ~/.minttyrc

BoldAsFont=-1
CursorType=block
Font=Source Code Pro Semibold
FontHeight=12
FontWeight=600

ForegroundColour=131, 148, 150
BackgroundColour=  0,  43,  54
CursorColour=    238, 232, 213

Black=             7,  54,  66
BoldBlack=         0,  43,  54
Red=             220,  50,  47
BoldRed=         203,  75,  22
Green=           133, 153,   0
BoldGreen=        88, 110, 117
Yellow=          181, 137,   0
BoldYellow=      101, 123, 131
Blue=             38, 139, 210
BoldBlue=        131, 148, 150
Magenta=         211,  54, 130
BoldMagenta=     108, 113, 196
Cyan=             42, 161, 152
BoldCyan=        147, 161, 161
White=           238, 232, 213
BoldWhite=       253, 246, 227

---
configure Vim
---

clone git folder to folder 
> mkdir -p ~/.vim/bundle/

git files
> git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim


copy .vimrc to home or write
copy
> cp vimrc .vimrc

write
```
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'altercation/vim-colors-solarized'
Plugin 'majutsushi/tagbar'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'bronson/vim-trailing-whitespace'
Plugin 'ervandew/supertab'
Plugin 'tpope/vim-surround'
Plugin 'godlygeek/tabular'
Plugin 'scrooloose/nerdtree'
Plugin 'scrooloose/nerdcommenter'
Plugin 'mattn/emmet-vim'
Plugin 'airblade/vim-gitgutter'
Plugin 'jiangmiao/auto-pairs'
Plugin 'yggdroot/indentline'


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

" Basic setting
set nu
set t_Co=256
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set smartindent
set cursorline
set backspace=indent,eol,start

" autocmd vimenter * NERDTree
map <C-n> :NERDTreeToggle<CR>

" setting for vim-colors-solarized
syntax enable
colorscheme solarized
set background=dark

" let g:user_emmet_expandabbr_key = '<Tab>'

```




open vi ,then run Vundle
> PluginInstall
