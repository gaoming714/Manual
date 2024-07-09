# Python AlphaBeta

> [!TIP]
> About Python

## poetry 

- add private repo

```shell
poetry source add --priority=explicit cuda https://download.pytorch.org/whl/cu121
```

> [!NOTE]
> Effect on pyproject.toml
> ```toml
> [[tool.poetry.source]]
> name = "cuda"
> url = "https://download.pytorch.org/whl/cu121"
> priority = "explicit"
> ```

- use private repo

```shell
poetry add torch=^2.3.1 torchvision=^0.18.1 torchaudio=^2.3.1 --source cuda
```

## isolated poetry

``` shell
poetry config --list
poetry config cache-dir "D:\\Portable\\Python"
poetry config virtualenvs.in-project true --local
```


## project

import os
import sys
__file__ = os.getcwd()
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(BASE_DIR)

## debug module

PySnooper

## `__name__` , `__file__`

__name__ 是package的名，立即执行的__name__ == '__main__'
__file__ 是当前文件的相对路径的文件名
os.getcwd()会得到的是运行文件的起始位置

## jump to IPython

from IPython import embed

embed()


## static http server

python -m http.server 9000


### pm2 static http server

``` yml
apps:
   - name : "http-server"
     script : "serve"
     env:
       PM2_SERVE_PATH : '.'
       PM2_SERVE_PORT : 9000
```

### nodejs static http server

http-server -p 9000




## CRLF LF

``` shell
find ./ | xargs grep '^M' -l -s
sed -i 's/^M//g'
```
