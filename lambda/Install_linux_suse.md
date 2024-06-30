# opensuse install

> [!TIP]
> personal way to install suse linux

------

## edit Repositories and Control

add Repository

zypper addrepo -f https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/oss/ openSUSE-Oss
zypper addrepo -f https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/non-oss/ openSUSE-Non-Oss
zypper addrepo -f https://mirrors.aliyun.com/opensuse/update/leap/15.0/oss/ openSUSE-Update-Oss
zypper addrepo -f https://mirrors.aliyun.com/opensuse/update/leap/15.0/non-oss/ openSUSE-Update-Non-Oss
zypper addrepo -f https://mirrors.aliyun.com/packman/openSUSE_Leap_15.0/ Packman

edit boot loader time => 0
language
network for name

tweak for ctrl 


### install disk

ls -al /dev/disk/by-uuid
vi /etc/fstab


### softwares

aptitude
gnome-tweak-tool
fcitx-googlepinyin
virtualbox
openssh-server
freerdp2-x11
git
nodejs
npm
nginx
testdist
tree
cmatrix

## zsh and 'oh my zsh'

cat /etc/shells
install zsh
$ sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
restart

anual

```shell
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh.git
cp ~/.zshrc ~/.zshrc.orig
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
chsh -s /bin/zsh
shutdown -r now
```

## fonts

```
sudo cp ./Documents/DocX_help/font/SourceCodePro-Semibold.otf /usr/share/fonts
sudo fc-cache -fv
```

## ~/.zshrc
export PATH=$HOME/bin:$HOME/Nightly:/usr/local/bin:$PATH

alias @create="bash create_activate"
alias @act="source activate"
alias @dct="deactivate"
alias @venv="source /home/lambda/bin/AlphaBeta/.venv/Scripts/activate"
alias @@@="cd /home/lambda/bin/AlphaBeta" 
