# Python AlphaBeta

> [!TIP]
> About Python

## JSON & pickle

``` python
# json
data = None
def load_it(json_path):
    with open(json_path, "r", encoding="utf-8") as file:
        data = json.load(file)
    return data

def save_it(json_path, data):
    with open(json_path, "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False)

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





## DF

``` python
#方法1：
data['升阻比']=data['升力系数']/data['阻力系数']

#方法2：
#data.eval('升阻比=升力系数/阻力系数',inplace=True)

#方法3：
#data['升阻比']=data.apply(lambda x:x['升力系数']/x['阻力系数'],axis=1)

#方法4：
#data['升阻比']=data.apply(lambda x:x[1]/x[2],axis=1)


se_tmp = df['name'].apply(lambda x:x[:1])
```


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


## isolated poetry

``` shell
poetry config --list
poetry config cache-dir "D:\\Portable\\Python"
poetry config virtualenvs.in-project true --local
```

## CRLF LF

``` shell
find ./ | xargs grep '^M' -l -s
sed -i 's/^M//g'
```
