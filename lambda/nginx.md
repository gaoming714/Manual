# nginx

> [!NOTE]  
> easy way to build a nginx connect others(reverse proxy) and automatically start
> An open proxy forwarding requests from and to anywhere on the Internet
> A reverse proxy talking requests from the Internet and forwarding them to servers in an interneal network. Those making requests connect to the proxy and may not be aware of the internal netwark.

## Install niginx

install nginx, it will create user `nginx`

```
apt install nginx
yum install nginx
```

edit  `/etc/nginx/nginx.conf`
at the end of http, ADD  "include vhosts.d"

```
http {
	...
include vhosts.d/*.conf;
}
```

edit `/etc/nginx/vhosts.d/domain.com.conf`
configre location or reverse proxy

0. type0

```
	server {
	        listen 80;
	        server_name 118.31.22.163;
	        root /home/nginx;
	        location / {
	                index index.html;
	                # proxy_pass http://127.0.0.1:3002;
	        }
	}
```

1. type1

```
	server {
	        listen 8080;
	        server_name www.jokerpy.com;
	        root /home/nginx;
	        location / {
	                index index.html;
	                proxy_pass http://127.0.0.1:3000;
	        }
	}
```
