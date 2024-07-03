# Git webhook introduction

> [!TIP]
> webhook script and sha-256 tip


> A minimal Flask application to handle github webhook.
> ![HookScript](https://github.com/gaoming714/HookScript)

## TIPS

### 如何用postman模拟github webhook

获取webhook 的 header和payload(json)
header 需要 
- Request method: POST
- Content-Type: application/json
- X-Hub-Signature: sha1=8cabbcfb32f29bf9049b3ddc8c173f09f1a0d7a4
- X-Hub-Signature-256: sha256=5a8148126b75c6484d1964df04fd34161d0ca3785a2443c396efd96b38c81e21

payload 需要使用json *一定要去掉所有的空格和换行*

然后就可以用postman模拟发送post请求了

> [!NOTE]
> 也推荐使用 httpie

### 测试代码 sha-256 算法(测试 Webhook 有效负载验证)

可以使用以下的 secret 和 payload 值来验证实现是否正确：

```
secret: "It's a Secret to Everybody"
payload: "Hello, World!"
```

如果实现正确，则生成的签名应与以下签名值匹配：

```
signature: 757107ea0eb2509fc211221cce984b8a37570b6d7586c22c46f4379c8b043e17
X-Hub-Signature-256: sha256=757107ea0eb2509fc211221cce984b8a37570b6d7586c22c46f4379c8b043e17
```
