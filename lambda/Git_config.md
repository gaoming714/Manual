# git配置

> here is git configure for Linux or windows

---

## 1.configure name

### 1.1 个人用户名

Linux place  ` ~/.gitconfig `
windows place  ` ~/.gitconfig `

    git config --global user.name "username"
    git config --global user.email "username@gmail.com"


### 1.2 系统用户名

the act place  ` /etc/gitconfig `
the act place  ` /mingw64/etc/gitconfig `

    git config --system user.name "username"
    git config --system user.email "username@gmail.com"



## 2. configure RSA

### 2.1 git-ssh

是否存在旧的密钥对,用已有的，或者删除

    ls -al ~/.ssh  #check

### 2.2 生成密钥对

默认路径~/.ssh/id_rsa和id_rsa.pub

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

规定输出文件

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ./key`


### 2.3 登录Github, 添加rsa.pub

添加id_rsa.pub


### 2.4 系统添加 rsa 到 ssh
ssh_config 指定 id_rsa ( ~/.ssh/config )

```shell 
Host github.com
    HostName github.com
    IdentityFile /.../_rsa
```


### 2.5测试

返回 下文即为正确
```shell
ssh -T git@github.com
> Hi "username!" You've successfully authenticated, but GitHub does not provide shell access.
```

可能需要更改id_rsa的权限



## 3. 多账号设置 的方法

这样你就已经正确的生成好了两个密钥，假设是：github_a和github_b分别对应的是你的账户aaaaaa和账户bbbbbb

修改config文件
```shell
vim ~/.ssh/config        个人
vim /etc/ssh/ssh_config  全局
```

添加如下代码

```shell
Host aaaaaa.github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_a
Host bbbbbb.github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_b
```

修改ssh URL(maybe)

    例如原来的url是：git@github.com:aaaaaa/xxxxxx.git
    需要改成：git@aaaaaa.github.com:aaaaaa/xxxxxx.git
    bbbbbb账号的修改也是如此

## 4. windows init 处理字符为LF

git config --global core.autocrlf false

~/.gitconfig

```shell
[core]
    editor = vim
    autocrlf = false
```
