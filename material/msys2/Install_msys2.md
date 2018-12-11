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

configure LANG
---

configure /etc/profile.d/lang.sh

    test -z "${LC_ALL:-${LC_CTYPE:-$LANG}}" && export LANG=""

---

Install packages
---

pacman -S vim       (ln -s /bin/vim.exe /bin/vi)
pacman -S zsh
pacman -Syu

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

---

Install packages
---
pacman -Syu

git
python3
python-pip
oh-my-zsh

    sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"


---

configure VIM
---

**add-on**

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

