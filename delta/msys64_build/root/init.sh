rm -rf /etc/pacman.d/*
cp src/mirrorlist.* /etc/pacman.d
reset
echo "\nClose this window and reopen to reflush gnupg"