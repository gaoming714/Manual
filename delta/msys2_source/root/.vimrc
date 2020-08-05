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
Plugin 'scrooloose/nerdtree'
" Plugin 'yggdroot/indentline'
Plugin 'bronson/vim-trailing-whitespace'
" edit
Plugin 'tpope/vim-fugitive'
Plugin 'tpope/vim-surround'
Plugin 'tpope/vim-commentary'
Plugin 'junegunn/gv.vim'
Plugin 'ervandew/supertab'
Plugin 'godlygeek/tabular'
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
set backspace=indent,eol,start
set numberwidth=5

" Theme
set t_Co=256
set background=dark
syntax enable
colorscheme gruvbox

" airline
let g:airline_theme="luna"
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#wordcount#filetypes = 0

" Map
let g:user_emmet_leader_key='<C-Y>'
map <C-n> :NERDTreeToggle<CR>
