"""
A simple celery tasks example
the file name tasks should be focused.
"""

import os
import sys
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)

from celery import Celery


app = Celery('tasks',
             backend='redis://localhost',
             broker='redis://localhost',
             )
@app.task
def add(x, y):
    return x + y


'''
run redis-server
celery -A tasks worker  --loglevel=info
                        --pool=eventlet
                        --concurrency=2048
                        --hostname=trade@TeX
                        --logfile=../log/tasks.log

open python cli to run:

from tasks import add
add.delay(2,2)

'''
