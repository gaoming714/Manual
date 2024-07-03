# systemctl.serivce

> [!TIP]
> systemctl

```shell

# Name of task
# =======================
#
# description

#
[Unit]
Description=A high performance web server and a reverse proxy server

[Service]
Type=forking
PIDFile=/run/shadowsocks.pid
WorkingDirectory=/home/lambda/bin/walls
ExecStart=/home/lambda/bin/poetry run ssserver -p 8699 -k password -m rc4-md5 --user nobody -d start
ExecStop=/home/lambda/bin/poetry run ssserver -d stop

[Install]
WantedBy=multi-user.target

```

## Step:

cp this.service to /usr/lib/systemd/system/shadowsock.service

