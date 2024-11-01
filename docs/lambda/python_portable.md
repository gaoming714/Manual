---
icon: fab fa-steam
---

# python portable

> [!TIP]
> create a portable python package on windows.(整合包)
> win only. (mac later)

## background

For users who don't have a Python environment, if you want to give them a Python program, you need to include a runtime environment. How can you package it for easier distribution? In other words, how can you create an all-in-one package?

背景：对于没有python环境的用户，如果想给他一个python程序，需要附带一个运行时环境，如何打包才能更方便，换句话说这就是整合包


## Principle

将一个便携版的python放到目录中，利用这个  `python -m pip` 安装包, 或者这里只引入一个venv或者poetry，在目标设备上进行最后一步安装依赖。可以提前准备artifacts

> [!TIP]
> 注意：一定要分清楚你选择的依赖方案是采用的绝对路径还是相对路径，一般最后一install都是绝对路径，所以这一步一定要在目标机器上运行（也就是用户运行python程序之前需要初始化）。
> 要提醒用户初始化后更改目录需要重新初始化。


## Steps for pip ( to be tested )

### 1.download a portable python (lite version), such as winpython, miniconda

winpython 3.12.4.1dot (https://sourceforge.net/projects/winpython/files)

minconda (https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe)

### 2.copy runtime env to project folder

For winpython, copy all files in python-3.12.4.amd64 to project/runtime (python.exe is project/runtime/python.exe)
For anaconda, copy all files to project/runtime

### 3.use local python (not system python) install packages.

```shell
    runtime/python.exe -m pip install (essential packages)
    runtime/python.exe -m pip -r requirements.txt
```

### 4. create bat file

On target os, only need to drop script.py on python.bat (runtime\python.exe)
``` bat
@echo off
runtime\python.exe "%1"
```

## steps for poetry (I use poetry to create venv)

### 1.download a portable python (lite version), such as winpython, miniconda

winpython 3.12.4.1dot (https://sourceforge.net/projects/winpython/files)

### 2.copy runtime env to project folder

For winpython, copy all files in python-3.12.4.amd64 to project/runtime (python.exe is project/runtime/python.exe)

### 3. use local python (not system python) install poetry.
All the package is controlled by poety. config cache-dir in local path.

```shell
    runtime/python.exe -m pip install poetry
    runtime/python.exe -m poetry config --local cache-dir "./pypoetry"
```

### 4. create init & bat file

create init.bat for user to run it on target machine. poetry will create hard code path.

``` bat
@echo off
:: init.bat
runtime\python.exe -m poetry install

pause
```

On target os, only need to drop script.py on python.bat (runtime\python.exe)
``` bat
@echo off
runtime\python.exe -m poetry run python "%1"
```

### 5. get all artifacts, then remove virtualenvs,

To address the issue of target users having limited network access for downloading packages, we will pre-prepare the necessary materials and clean up any unnecessary venvs on the target machines.

```shell
runtime/python.exe -m poetry install
runtime/python.exe -m poetry env remove --all
```


```makefile
# pip
build:
    @if [ ! -f "requirements.txt" ]; then \
        echo "requirements.txt not found."; \
        exit 1; \
    fi
    echo "Installing dependencies from requirements.txt...";
    runtime/python -m pip install -r requirements.txt;
    echo "Dependencies installed successfully.";

freeze:
    @echo "Generating requirements.txt from installed packages..."
    @poetry run pip freeze > requirements.txt
    @echo "requirements.txt has been generated."
    @cat -n requirements.txt | awk '{ printf "\033[32m%3d\033[0m \033[36m%s\033[0m\n", $$1, $$2 }'

```


```makefile
# poetry
build:
    @echo "Building the portable project..."
    @if [ -f "poetry.toml" ]; then \
        echo "poetry.toml exists. Please clean it first."; \
        exit 1; \
    fi
    @runtime/python.exe -m pip install poetry
    @runtime/python.exe -m poetry config --local cache-dir "./pypoetry"
    @echo "Build completed."
    @echo "Download artifacts..."
    @runtime/python.exe -m poetry install
    @echo "Remove virtualenv..."
    @runtime/python.exe -m poetry env remove --all

clean:
    @if [ -d "pypoetry" ]; then \
        echo "Removing pypoetry directory..."; \
        rm -rf pypoetry; \
    fi
    @if [ -f "poetry.toml" ]; then \
        echo "Removing poetry.toml file..."; \
        rm poetry.toml; \
    fi

freeze:
    @echo "Generating requirements.txt from installed packages..."
    @poetry run pip freeze > requirements.txt
    @echo "requirements.txt has been generated."
    @cat -n requirements.txt | awk '{ printf "\033[32m%3d\033[0m \033[36m%s\033[0m\n", $$1, $$2 }'

```