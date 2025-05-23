---
icon: fab fa-steam
---

# Python AlphaBeta

## packages

- pendulum
  时间

- tomlkit
  处理 toml

- pygame
  播放音乐视频

- poetry
  venv

- PySnooper
  debug module

## JSON & pickle

```python
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

```python
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

## projects

import os
import sys
**file** = os.getcwd()
BASE_DIR = os.path.dirname(os.path.abspath(**file**))
sys.path.append(BASE_DIR)

## 语法糖

`__name__` , `__file__`

`__name__` 是 package 的名，立即执行的 `__name__ == '__main__'`
`__file__` 是当前文件的相对路径的文件名
`os.getcwd()`会得到的是运行文件的起始位置

## jump to IPython

1. ipdb
    ```python
    import ipdb
    ipdb.set_trace()
    ```
2. embed
    ```python
    from IPython import embed
    embed()
    ```

## static http server

python -m http.server 9000

## isolated 

### pip

1. copy runtime to folder `runtime`
2. use local runtime python to run python & pip
    ```shell
    runtime/python -m pip install **
    runtime/python script.py
    ```

### poetry

```shell
poetry config --list
poetry config cache-dir "D:\\Portable\\Python\\pypoetry"
poetry config virtualenvs.in-project true --local
```

