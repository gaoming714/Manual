# Information for python

### JSON & pickle

``` python
# json
data = None
with open("file.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

with open("file.json", 'w', encoding='utf-8') as f:
    json.dump(data, f)

# pickle
data = None
with open("file.pickle", 'rb') as f:
    data = pickle.load(f)

with open("file.pickle", 'wb') as f:
    pickle.dump(data, f)
```

### dict to json

data = None
json.dumps(data)

### Series DF to JSON

ss = pd.Series()
ss.to_json()

df = pd.DataFrame()
df.to_json() # for column
df.T.to_json() #for row

df.T.to_json(force_ascii=False) # ZH ascii

pd.read_json(jj,orient="index")



### json to dict
data_dict = json.loads(json_str)
json_str = json.dumps(data_dict)



---

## celery

@@ celery -A proj worker --loglevel=info -P eventlet
@@ celery -A trade worker --loglevel=info -P eventlet
@@ celery multi start w1 -A proj --loglevel=info -P eventlet

if proj is py, run python
else: proj is floder, fun proj/celery (need __init__.py)

## DF

#方法1：
data['升阻比']=data['升力系数']/data['阻力系数']

#方法2：
#data.eval('升阻比=升力系数/阻力系数',inplace=True)

#方法3：
#data['升阻比']=data.apply(lambda x:x['升力系数']/x['阻力系数'],axis=1)

#方法4：
#data['升阻比']=data.apply(lambda x:x[1]/x[2],axis=1)


se_tmp = df['name'].apply(lambda x:x[:1])



## pytest

pytest -v
> detail

pytest -q --tb=no
> very quiet , with no tb

pytest --collect-only
> pre run

pytest -k ""
> re to run

pytest -m markflag
> markflag
> @pytest.mark.markflag

pytest -x
> XFAIDED as FAILED

pytest -s
> sys.stdout/stderr

pytest --lf
> run last failed one

pytest --ff
> run first failed and the futures


## venv

python -m venv venvname
source venvname/Scripts/activate
deactivate

## project

import os
import sys
__file__ = os.getcwd()
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(BASE_DIR)

## debug module
PySnooper


# timezone
tz = pytz.timezone('Asia/Shanghai')
now = tz.normalize(datetime.datetime.now(pytz.utc).astimezone(tz))

tz = pytz.timezone('Asia/Shanghai')
tz_utc = pytz.timezone('UTC')
now = tz.normalize(datetime.datetime.utcnow().astimezone(tz_utc))

## time but no timezone
now = datetime.datetime.utcnow() + datetime.timedelta(hours=8)

## delorean
from delorean import Delorean

d = Delorean()
d = d.shift('US/Eastern')
return d