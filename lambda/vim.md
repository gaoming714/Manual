# vim

> [!NOTE]  
> VIM, with Vundle or Plug

## Vundle (deprecated)

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
```
:PluginInstall
```

## vim Plug

Download plug.vim and put it in the "autoload" directory.
`~/.vim/autoload/plug.vim`

```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

edit ~/.vimrc
```
set nocompatible              " be iMproved, required
call plug#begin('~/.vim/plugged')

" Make sure you use single quotes

" theme
Plug 'dracula/vim'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'tpope/vim-fugitive'


" pretty
Plug 'scrooloose/nerdtree'
Plug 'pangloss/vim-javascript'
Plug 'bronson/vim-trailing-whitespace'

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
syntax enable
colorscheme dracula

" Airline
" let g:airline_theme = "luna"
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
" let g:airline#extensions#wordcount#filetypes = 0
" let g:airline_section_b = '%{strftime("%T %a")}'

" NERDTree
map <C-n> :NERDTreeToggle<CR>
```

## Tips


convert tab to space

```
:set ts=4
:set expandtab
:%retab!
```

convert space to tab

```
:set ts=4
:set noexpandtab
:%retab!
```

