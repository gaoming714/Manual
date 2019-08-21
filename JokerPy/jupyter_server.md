## Install jupyter server

## required

nginx
jupyter

# jupyter

create ~/.jupyter/jupyter_notebook_config.py
jupyter notebook --generate-config

create password to ~/.jupyter/jupyter_notebook_config.json
jupyter notebook password

edit ~/.jupyter/jupyter_notebook_config.py
e.g. 
# Set ip to '\*' to bind on all interfaces (ips) for the public server
c.NotebookApp.ip = '127.0.0.1'
c.NotebookApp.open_browser = False 
# with hostnames configured in local_hostnames.
c.NotebookApp.allow_remote_access = True 
# It is a good idea to set a known, fixed port for server access
c.NotebookApp.port = 3888

# nginx

create server /etc/nginx/site-avaliable/jupyter.conf
server { 
    # use 'listen 80 deferred;' for Linux 
    # use 'listen 80 accept_filter=httpready;' for FreeBSD
    listen 8888;
    client_max_body_size 4G;
    
    # set the correct host(s) for your site
    server_name example.com www.example.com;
    
    keepalive_timeout 5;
    
    # path for static files
    root /path/to/app/current/public;
    
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
        proxy_pass http://127.0.0.1:3888;
        proxy_http_version 1.1;
        proxy_read_timeout 3600s;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    error_page 500 502 503 504 /500.html;
    location = /500.html {
        root /path/to/app/current/public;
    }

}

# restart nginx
systemctl restart nginx

# start jupyter
jupyter notebook

# open web
http://host:8888/