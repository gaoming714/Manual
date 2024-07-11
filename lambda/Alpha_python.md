# Python AlphaBeta

> [!TIP]
> About Python

# Install python on windows

> miniconda (similar to anaconda, miniforge)

> [`miniconda Official Documentation`](https://docs.anaconda.com/miniconda/)

1. Download miniconda package (latest or else)

```shell
https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe
https://repo.anaconda.com/miniconda/
```

2. Install miniconda exe package, copy this folder to D:\Portable\Python

> Folder name `Python` can be customized.

``` shell
D:\Portable
├── Python     #miniconda3
│   ├── Scripts
│   │   ├── conda.exe
│   ├── python.exe
│   └── pythonw.exe
```

3. On MSYS(unix-like system on windows) install essential package with conda.exe

> [conda-forge repo](https://anaconda.org/conda-forge)

All the python project is running with `poetry` in my workflow, 
so only `poetry` is the essential package for me.

```shell
cd /d/Portable/Python/Scripts
./conda install conda-forge::poetry
```

test: `/d/Portable/Python/Scripts/poetry --version`

4. make poetry to Path,
```shell
# ~/.zshrc
alias poetry=/d/Portable/Python/Scripts/poetry
```
reload `~/.zshrc` : `source ~/.zshrc`
test: `poetry --version`

5. poetry config cache path

```shell
# list all
poetry config --list

# config cache-dir
poetry config cache-dir "D:\\Portable\\Python\\pypoetry"
```

6. test python env

```shell
cd emptyfolder
poetry init
poetry install pendulum --no-root
poetry run python -c "import pendulum; print(pendulum.now('Asia/Shanghai'))"
```

# Install python on Linux / macOS

> miniconda (similar to anaconda, miniforge)

> [`miniconda Official Documentation`](https://docs.anaconda.com/miniconda/)

1. Download miniconda package (latest or else)

```shell
# Choosing the right chip architecture
https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
https://repo.anaconda.com/miniconda/
```

2. Install miniconda3.sh to `/home/lambda/Python`

> [!NOTE]
> Folder name `Python` can be customized.
> But can't move or rename folder path after install.

``` shell
/home/lambda
├── Python     #miniconda3
│   ├── bin
│   │   ├── conda
│   │   ├── python
│   ├── cmake
│   └── ...
```

3. install essential package with conda

> [conda-forge repo](https://anaconda.org/conda-forge)

All the python project is running with `poetry` in my workflow, 
so only `poetry` is the essential package for me.

```shell
cd /home/lambda/Python/bin
./conda install conda-forge::poetry
```

test: `/home/lambda/Python/bin/poetry --version`

4. make poetry to Path(choice one)

- make poetry as alias
```shell
# ~/.zshrc
alias poetry=/home/lambda/Python/bin/poetry
```

- make poetry as a link in PATH folder
```shell
# ~/.zshrc
export PATH=$HOME/bin:$HOME/Nightly:/usr/local/bin:$PATH
```

```shell
# Folder /home/lambda/Nightly/ is in PATH
cd /home/lambda/Nightly
ln -s /home/lambda/Python/bin/poetry
```

reload `~/.zshrc`: `source ~/.zshrc`
test: `poetry --version`

5. poetry config cache path

```shell
# list all
poetry config --list

# config cache-dir
poetry config cache-dir "/home/lambda/Python/pypoetry"
```

6. test python env

```shell
cd emptyfolder
poetry init
poetry install pendulum --no-root
poetry run python -c "import pendulum; print(pendulum.now('Asia/Shanghai'))"
```


## poetry pyproject.toml

### package-mode 
> Whether Poetry operates in package mode (default) or not. Optional

- `package-mode = true` (same to `poetry install`)
- `package-mode = false` (same to `poetry install --no-root`)

set packege-mode = false as global config (to be done)


### poetry private repo

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
```shell
# if need to config virtualenvs in project as global config
poetry config virtualenvs.in-project true --local

# if need to config virtualenvs in project as local config
# run in project
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


## CRLF LF

``` shell
find ./ | xargs grep '^M' -l -s
sed -i 's/^M//g'
```
