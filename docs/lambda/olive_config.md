---
icon: fab fa-steam
---

# olive config for download douyin bilibili video

> demos

---

```toml
[Config]
PortalUsername = 'olive'
PortalPassword = 'olive'
LogDir = './'
SaveDir = './data'
OutTmpl = "[{{ .StreamerName }}][{{ now | date \"2006-01-02 15-04-05\"}}][{{ .RoomName }}].mp4"
LogLevel = 5

[[Shows]]
ID = 'douyin.418597516653'
Platform = 'douyin'
RoomID = '418597516653'
StreamerName = '贝拉米'
Parser = 'ffmpeg'

[[Shows]]
ID = 'douyin.627454899625'
Platform = 'douyin'
RoomID = '627454899625'
StreamerName = '测试'
Parser = 'ffmpeg'

[[Shows]]
ID = 'douyin.768226753791'
Platform = 'douyin'
RoomID = '768226753791'
StreamerName = '测试2'
Parser = 'ffmpeg'
```
