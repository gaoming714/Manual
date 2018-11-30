ubuntu install
======

------

### update source
configure update
use aliyun

### install disk or device

ls -al /dev/disk/by-uuid
vi /etc/fstab

vi /etc/group  => add user to vbox

### softwares

aptitude  as  att
build-essential
gnome-tweak-tool
fcitx-googlepinyin
net-tools
virtualbox
guake
vlc
openssh-server
freerdp2-x11
git
gitKraken
nodejs
npm
nginx
testdisky
tree
cmatrix

### zsh and 'oh my zsh'

cat /etc/shells
install zsh
$ sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
restart

Manual
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh.git
cp ~/.zshrc ~/.zshrc.orig
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
chsh -s /bin/zsh
shutdown -r now

config .zshrc
export PATH=/home/gaoming/bin:$PATH

### fonts

```
sudo cp ./Documents/DocX_help/font/SourceCodePro-Semibold.otf /usr/share/fonts
sudo fc-cache -fv
```

### ssh config add rsa

vi /etc/ssh/ssh_config
```
Host github.com
        HostName github.com
        IdentityFile file_path
Host gitlab.com
        HostName gitlab.com
        IdentityFile file_path
```

### vim

install vim
config plugins


### key  sublime3

```
----- BEGIN LICENSE -----
sgbteam
Single User License
EA7E-1153259
8891CBB9 F1513E4F 1A3405C1 A865D53F
115F202E 7B91AB2D 0D2A40ED 352B269B
76E84F0B CD69BFC7 59F2DFEF E267328F
215652A3 E88F9D8F 4C38E3BA 5B2DAAE4
969624E7 DC9CD4D5 717FB40C 1B9738CF
20B3C4F1 E917B5B3 87C38D9C ACCE7DD8
5F7EF854 86B9743C FADC04AA FB0DA5C0
F913BE58 42FEA319 F954EFDD AE881E0B
------ END LICENSE ------
```

