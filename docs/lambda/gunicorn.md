# gunicorn

> [!NOTE]  
> Python WSGI HTTP Server for UNIX
> daemon for python server.

1. nginx
2. gunicorn


## 1. nginx

configure file for nginx

```shell
/etc/nginx/sites-available/site.conf
ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enable/site.conf
```

site.conf

```shell
server {

    # use 'listen 80 deferred;' for Linux
    # use 'listen 80 accept_filter=httpready;' for FreeBSD
    listen 3000;
    client_max_body_size 4G;

    # set the correct host(s) for your site
    server_name ip_host;
    
    keepalive_timeout 5;
    
    # path for static files
    root /path/to/applicationroot;
    
    location / {
        # checks for static file, if not found proxy to app
        try_files $uri @proxy_to_app;
    }
    
    location @proxy_to_app {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        # we don't want nginx trying to do something clever with
        # redirects, we set the Host: header above already.
        proxy_redirect off;
        # proxy_pass http://127.0.0.1:8000;
        proxy_pass http://unix:/path/to/applicationroot/socket;
    }
    
    error_page 500 502 503 504 /500.html;
    location = /500.html {
        root /path/to/app/current/public;
    }
}
```


## 2.1 gunicorn one app type I, 

> two filem service & socket

/etc/systemd/system/gunicorn.service:

```
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
PIDFile=/run/gunicorn/pid
User=someuser
Group=someuser
RuntimeDirectory=gunicorn
WorkingDirectory=/path/to/applicationroot
ExecStart=/usr/bin/gunicorn --pid /run/gunicorn/pid   \
          --bind unix:/run/gunicorn/socket applicationname.wsgi
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s TERM $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

/etc/systemd/system/gunicorn.socket:

```
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn/socket

[Install]
WantedBy=sockets.target
```

## 2.2 gunicorn one app type II

/etc/systemd/system/gunicorn.service:

```
[Unit]
Description=gunicorn daemon
After=network.target

[Service]
ListenStream=/path/to/applicationroot/socket
PIDFile=/path/to/applicationroot/pid
RuntimeDirectory=gunicorn
WorkingDirectory=/path/to/applicationroot
ExecStart=/usr/local/bin/gunicorn                     \
        --pid /path/to/applicationroot/pid            \
        --bind unix:/path/to/applicationroot/socket   \
        applicationname.wsgi
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s TERM $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

## 2.3 gunicorn one app type III

/etc/systemd/system/gunicorn.service:

```
[Unit]
Description=gunicorn daemon
After=network.target

[Service]
ListenStream=/path/to/applicationroot/socket
PIDFile=/run/gunicorn/pid
RuntimeDirectory=gunicorn
WorkingDirectory=/path/to/applicationroot
ExecStart=/usr/local/bin/gunicorn --config gunicorn.ini  applicationname.wsgi
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s TERM $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

/path/to/applicationroot/gunicorn.ini

```
import multiprocessing
pid = "/path/to/applicationroot/pic"
bind = "unix:/path/to/applicationroot/socket"
workers = multiprocessing.cpu_count() * 2 + 1
```

## 2.4 gunicorn Mutiweb App type I  (not work)


> (nginx has seperate port or socket)

App-A  gunicorn.one && gunicorn.two

/lib/systemd/system/gunicorn.one

```
[Unit]
Description=gunicorn daemon
After=network.target
PartOf=gunicorn.target
ReloadPropagetedFrom=gunicorn.target

[Service]
ListenStream=/path/to/applicationroot/socket
PIDFile=/path/to/applicationroot/pid
RuntimeDirectory=gunicorn
WorkingDirectory=/path/to/applicationroot
ExecStart=/usr/local/bin/gunicorn --config gunicorn.ini  applicationname.wsgi
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s TERM $MAINPID
PrivateTmp=true

[Install]
WantedBy=gunicorn.target
```

/lib/systemd/system/gunicorn.target

```
[Unit]
Description=gunicorn
Documentation=https://example.com/path/to/your/docs

[Install]
WantedBy=multi-user.target
```

/path/to/applicationroot/gunicorn.ini
```
import multiprocessing
pid = "/path/to/applicationroot/pic"
bind = "unix:/path/to/applicationroot/socket"
workers = multiprocessing.cpu_count() * 2 + 1
```



## 3. command systemd

```shell
systemctl start gunicorn
systemctl stop gunicorn
systemctl enable gunicorn
systemctl disable gunicorn
```
