pacman -S vim zsh git tig p7zip rsync winpty
ln -s /bin/vim.exe /bin/vi

cp src/nsswitch.conf /etc/

cp src/.minttyrc /root/
cp src/.zshrc /root/
cp src/.vimrc /root/
cp -r src/.vim /root/

reset
echo -e "\n"
echo "Close this window and install Ohmyzsh"
echo -e "\n"