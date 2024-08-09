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