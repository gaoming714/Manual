rm -rf /etc/pacman.d/*
cp src/mirrorlist.* /etc/pacman.d

reset
echo -e "\n"
echo "Close this window and reopen to reflush gnupg"
echo -e "\n"