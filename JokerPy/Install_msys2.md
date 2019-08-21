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

ForegroundColour=235, 219, 178
BackgroundColour=  0,  43,  54
CursorColour=     65, 255,  65

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
Plugin 'dracula/vim'
Plugin 'morhetz/gruvbox'
" Plugin 'altercation/vim-colors-solarized'
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
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set smartindent
set cursorline
set backspace=indent,eol,start

" setting for vim-colors-solarized
set t_Co=256
syntax enable
set background=dark
colorscheme gruvbox
" let g:solarized_termcolors=256
" colorscheme solarized

" settings for airline
" let g:airline_theme="luna"
" let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1


" autocmd vimenter * NERDTree
map <C-n> :NERDTreeToggle<CR>

" let g:user_emmet_expandabbr_key = '<Tab>'


```




open vi ,then run Vundle
> PluginInstall
