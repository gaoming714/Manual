ubuntu install 
======

------

### update source

useing aliyun


### install disk

ls -al /dev/disk/by-uuid
vi /etc/fstab

### remove error report

vi /etc/default/apport
enabled=0


### softwares

aptitude  as  att
gnome-tweak-tool
fcitx-googlepinyin
virtualbox
guake
vlc
openssh-server
freerdp2-x11
git
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

### others

gitKraken
need  gconf2
   

### .bashrc 

PATH=$PATH:/home/gaoming/bin/
alias apt='aptitude'



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
—– BEGIN LICENSE —–
TwitterInc
200 User License
EA7E-890007
1D77F72E 390CDD93 4DCBA022 FAF60790
61AA12C0 A37081C5 D0316412 4584D136
94D7F7D4 95BC8C1C 527DA828 560BB037
D1EDDD8C AE7B379F 50C9D69D B35179EF
2FE898C4 8E4277A8 555CE714 E1FB0E43
D5D52613 C3D12E98 BC49967F 7652EED2
9D2D2E61 67610860 6D338B72 5CF95C69
E36B85CC 84991F19 7575D828 470A92AB
—— END LICENSE ——
```
