# Python log

> using package logger in python

---

## function, 使用 logging

```python
import logging
```

1. 创建一个logger

```python
logger = logging.getLogger()   # 定义对应的程序模块名name，默认是root
logger.setLevel(logging.INFO)  # 指定最低的日志级别 critical > error > warning > info > debug
```

2. 创建一个handler，用于写入日志文件

```python
logfile = './logfile.log'
fh = logging.FileHandler(logfile, mode='a',encoding="utf-8")
fh.setLevel(logging.DEBUG)  # 用于写到file的等级开关
```

3. 再创建一个handler,用于输出到控制台

```python
ch = logging.StreamHandler()
ch.setLevel(logging.WARNING)    # 输出到console的log等级的开关
```

4. 定义handler的输出格式

```python
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh.setFormatter(formatter)
ch.setFormatter(formatter)
```

5. 将logger添加到handler里面

```python
logger.addHandler(fh)
logger.addHandler(ch)
```
6. 测试logger

```python
if __name__ == '__main__':
    logger.debug('debug message')
    logger.info('info message')
    logger.warning('warning message')
    logger.error('error message')
    logger.critical('critical message')
```

0. 汇总

```
import logging

# create & setLevel
# critical > error > warning > info > debug
logger = logging.getLogger()  # 定义对应的程序模块名name，默认是root
logger.setLevel(logging.INFO) # 指定最低的日志级别 

# FileHandler
logfile = './logfile.log'
fh = logging.FileHandler(logfile, mode='a',encoding="utf-8")
fh.setLevel(logging.DEBUG)  # 用于写到file的等级开关

# StreamHandler
ch = logging.StreamHandler()
ch.setLevel(logging.WARNING)    # 输出到console的log等级的开关

# addHandler
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh.setFormatter(formatter)
ch.setFormatter(formatter)
logger.addHandler(fh)
logger.addHandler(ch)

if __name__ == '__main__':
    logger.debug('debug message')
    logger.info('info message')
    logger.warning('warning message')
    logger.error('error message')
    logger.critical('critical message')

```

## Class

```
import logging
import os.path
import time
from colorama import Fore, Style
import sys


class Logger(object):
    def __init__(self, logger):
        """
        指定保存日志的文件路径，日志级别，以及调用文件
        将日志存入到指定的文件中
        :param logger:  定义对应的程序模块名name，默认为root
        """

        # 创建一个logger
        self.logger = logging.getLogger(name=logger)
        self.logger.setLevel(logging.DEBUG)  # 指定最低的日志级别 critical > error > warning > info > debug
    
        # 创建一个handler，用于写入日志文件
        rq = time.strftime("%Y-%m-%d_%H-%M-%S", time.localtime(time.time()))
        log_path = os.getcwd() + "/logs/"
        log_name = log_path + rq + ".log"
        #  这里进行判断，如果logger.handlers列表为空，则添加，否则，直接去写日志，解决重复打印的问题
        if not self.logger.handlers:
            # 创建一个handler，用于输出到文件
            fh = logging.FileHandler(log_name,encoding="utf-8")
            fh.setLevel(logging.INFO)
    
            # 创建一个handler，用于输出到控制台
            ch = logging.StreamHandler(sys.stdout)
            ch.setLevel(logging.DEBUG)
    
            # 定义handler的输出格式
            formatter = logging.Formatter(
                "%(asctime)s - %(filename)s[line:%(lineno)d] - %(name)s - %(message)s")
            ch.setFormatter(formatter)
            fh.setFormatter(formatter)
    
            # 给logger添加handler
            self.logger.addHandler(fh)
            self.logger.addHandler(ch)
    
    def debug(self, msg):
        """
        定义输出的颜色debug--white，info--green，warning/error/critical--red
        :param msg: 输出的log文字
        :return:
        """
        self.logger.debug(Fore.WHITE + "DEBUG - " + str(msg) + Style.RESET_ALL)
    
    def info(self, msg):
        self.logger.info(Fore.GREEN + "INFO - " + str(msg) + Style.RESET_ALL)
    
    def warning(self, msg):
        self.logger.warning(Fore.RED + "WARNING - " + str(msg) + Style.RESET_ALL)
    
    def error(self, msg):
        self.logger.error(Fore.RED + "ERROR - " + str(msg) + Style.RESET_ALL)
    
    def critical(self, msg):
        self.logger.critical(Fore.RED + "CRITICAL - " + str(msg) + Style.RESET_ALL)

if __name__ == '__main__':
    log = Logger(logger="main")
    log.debug("debug")
    log.info("info")
    log.error("error")
    log.warning("warning")
    log.critical("critical")
```