FROM ubuntu:16.04

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs nginx \
    && rm -rf /var/www/html \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www

COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY docker/site-default.conf /etc/nginx/sites-available/default

COPY . ./

# install dependencies, build the app and remove all but builded files
RUN bin/install-dependencies.sh \
    && npm run build:prod \
    && ls | grep -v dist | xargs rm -rf

CMD ["nginx", "-g" ,"daemon off;"]

