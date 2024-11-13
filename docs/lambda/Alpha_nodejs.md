---
icon: fab fa-steam
---

# Alpha nodejs AlphaBeta


## package manage

1. npm
2. yarn
3. pnpm (Star)

## config pnpm

### pnpm on windows

```zsh
# 在 .zshrc 中的代码段 set global path
export PNPM_HOME="/d/Portable/nodejs"
export PNPM_STORE_PATH="/d/Portable/nodejs"
```


## npm command
npm config ls -l

npm outdated


### pm2 static http server

```yml
apps:
   - name : "http-server"
     script : "serve"
     env:
       PM2_SERVE_PATH : '.'
       PM2_SERVE_PORT : 9000
```