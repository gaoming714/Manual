git配置
===

### 1.1个人用户名

$ git config --global user.name "username"
$ git config --global user.email "username@gmail.com"
实际位置	~/.gitconfig

### 1.2 系统用户名

$ git config --system user.name "username"
$ git config --system user.email "username@gmail.com"
实际位置	/etc/.gitconfig

### 2. 取消autocrlf
保证所有的文件都用utf-8，不进行win-linux转换
vi /etc/gitconfig
autocrlf = false

### 3.1 git-ssh
是否存在旧的密钥对
>ls -al ~/.ssh
>用这个，或者删除

### 3.2 生成密钥对

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
默认路径~/.ssh/id_rsa	和	id_rsa.pub

ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ./key
规定输出文件

### 3.3 登录Github, 进入 rsa.pub

添加id_rsa.pub

###测试
$ ssh -T git@github.com
>返回 下文即为正确 
>Hi "username!" You've successfully authenticated, but GitHub does not provide shell access.



### 多账号设置 的方法

这样你就已经正确的生成好了两个密钥，假设是：github_a和github_b分别对应的是你的账户aaaaaa和账户bbbbbb

修改config文件

> vim ~/.ssh/config             个人
>
> vim /etc/ssh/ssh_config  全局

添加如下代码

```
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

> 例如原来的url是：git@github.com:aaaaaa/xxxxxx.git
> 需要改成：git@aaaaaa.github.com:aaaaaa/xxxxxx.git
> bbbbbb账号的修改也是如此
>

