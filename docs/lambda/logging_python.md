---
icon: fab fa-steam
---

# Python log

::: tip
using loguru logger in python
:::

## package

> loguru

## how to use 

```python
from util import logConfig, logger
logConfig("logs/download.log", rotation="10 MB", level="DEBUG", lite=True)

logger.warning("Please Login~")
```

```python
#util.py
from loguru import logger

def set_datetime(record):
    record["extra"]["datetime"] = pendulum.now("Asia/Shanghai")


def logConfig(log_file="logs/default.log", rotation="10 MB", level="DEBUG", stdout=True, lite=False):
    """
    配置 Loguru 日志记录
    :param log_level: 日志级别，如 "DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"
    :param log_file: 日志文件路径
    :param rotation: 日志文件轮换设置，如 "10 MB" 表示文件大小达到 10MB 时轮换
    使用方法

    # 在程序开始时配置日志
    from model.util import logConfig, logger
    logConfig(log_file="myapp.log", rotation="5 MB")
    # 使用 logger 记录日志
    logger.info("This is an info message")
    logger.debug("This is a debug message")
    """
    logger.remove()  # 移除默认的处理程序（如果有的话）
    if lite:
        style = (
            " [ <level>{level: <8}</level>] "
            + "<cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan>"
            + "<green>♻ </green>"
            + "<level>{message}</level>"
        )
    else:
        style = (
            "<green>{extra[datetime]}</green>"
            + " [ <level>{level: <8}</level>] "
            + "<cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan>"
            + "<green>♻ </green>"
            + "<level>{message}</level>"
        )
    # alternative ➲ ⛏ ☄ ➜ ♻ ✨
    logger.configure(patcher=set_datetime)
    if stdout == True:
        logger.add(sys.stderr, level=level, colorize=True, format=style)
    logger.add(
        log_file, colorize=False, encoding="utf-8", format=style, rotation=rotation
    )
    logger.add(
        log_file + ".rich",
        colorize=True,
        encoding="utf-8",
        format=style,
        rotation=rotation,
    )
    logger.add(
        log_file + ".warning",
        level="WARNING",
        colorize=False,
        encoding="utf-8",
        format=style,
        rotation=rotation,
    )
    logger.add(
        log_file + ".warning.rich",
        level="WARNING",
        colorize=True,
        encoding="utf-8",
        format=style,
        rotation=rotation,
    )
```
