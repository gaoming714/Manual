# Git Guild
> for local git project

---
## create bare repo
### create

```shell
git init --bare name.git 
```

### change user

```shell
chown git -R name.git
```

### clone repo

```shell
git clone git@domain:/home/git/name.git
```

## create Initial commit

### touch new README.md

```shell
echo name >> README.md

git add README.md
git commit -am "Initial commit"
```

### push the current branch and set the remote as upstream

```shell
git push -u origin master
```



## develop

### create dev

```shell
git checkout -b dev

git branch dev
git checkout dev
```

### push dev with upstream

```shell
git push --set-upstream origin dev
git push -u origin dev
```

### clone dev

```shell
git fetch
git checkout dev
```

### create feature/0xA1

```shell
git checkout dev
git checkout -b feature/0xA1
git checkout -b feature/0xA1 dev
git push --set-upstream origin feature/0xA1
git push -u origin feature/0xA1
```

### merge feature/0xA1 then delete

```shell
git checkout dev
git merge --no-ff feature/0xA1
git branch -d feature/0xA1
```

### remove feature on remote

```shell
git push origin --delete serverfix
```

### remove feature useless

```shell
git fetch -p
git remote prune origin
```

### revert & revert on merget . "-m 1" means mainline is 1(dev)

```shell
git revert <commit>
git revert <commit> -m 1
```



## tag

### local & share

```shell
git tag tagname <commit>
git push <origin> <tagname>
git push <origin> --tags
```

### delete & share

```shell
git tag -d <tagname>
git push origin :refs/tags/<tagname>
git push origin --delete <tagname>
```

### others have to rebuild all tag

```shell
git tag -l | xargs git tag -d
git fetch
```
