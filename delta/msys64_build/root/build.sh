pacman -S vim zsh git p7zip rsync winpty
ln -s /bin/vim.exe /bin/vi

cp src/nsswitch.conf /etc/

cp src/.minttyrc /root/
cp src/.zshrc /root/
cp src/.vimrc /root/
cp -r src/.vim /root/

echo "\n\nClose this window and install Ohmyzsh"