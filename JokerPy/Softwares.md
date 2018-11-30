Workstation
======

---
# VIM

## clone git folder to folder 

    mkdir ~/.vim/bundle/

## git files

    git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim


## .vimrc

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
Plugin 'iamcco/mathjax-support-for-mkdp'
Plugin 'iamcco/markdown-preview.vim'
Plugin 'ervandew/supertab'
Plugin 'tpope/vim-surround'
Plugin 'godlygeek/tabular'
Plugin 'scrooloose/nerdtree'
Plugin 'scrooloose/nerdcommenter'
Plugin 'mattn/emmet-vim'
Plugin 'airblade/vim-gitgutter'
" Plugin 'raimondi/delimitmate'
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

" Basic setting
set nu
set t_Co=256
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set smartindent

" autocmd vimenter * NERDTree
map <C-n> :NERDTreeToggle<CR>

" setting for vim-colors-solarized
syntax enable
colorscheme solarized
set background=dark

" let g:user_emmet_expandabbr_key = '<Tab>'

```

## Install open vi ,then run Vundle
    PluginInstall

---

# nginx
###configure nginx.conf
1.  /etc/nginx/nginx.conf
at the end of http, ADD  "include vhosts.d"

>

    http {
        ...
        include vhosts.d/*.conf;
    }

/etc/nginx/vhosts.d/domain.com.conf
>
configre location or reverse proxy

    server {
            listen 80;
            # server_name www.jokerpy.com;
            # root /home/nginx;
            location / {
                    index index.html;
                    proxy_pass http://127.0.0.1:8000;
            }
    }

## Vbox
PC    Vbox   localhost
80    3000   8000
8001  3001   8001

---
# Python

## miniconda
/bin/zpy

## modules
pip
django
numpy
scipy
pandas
matplotlib


# JS
nodejs
npm


