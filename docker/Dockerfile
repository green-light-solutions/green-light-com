FROM php:7.1.13-fpm

# install dependencies
RUN apt-get update \
    && apt-get upgrade -y \
    && curl -sL https://deb.nodesource.com/setup_9.x | bash - \
    && apt-get install -y nginx zlib1g-dev git supervisor nodejs \
    && mkdir -p /var/log/supervisor \
    && docker-php-ext-install zip \
    && npm install -g bower \
    && rm -rf /var/lib/apt/lists/*

ARG COMPOSER_ARG=""
ARG BOWER_ARG=""

# configs
COPY docker/files/etc/ /etc/
COPY docker/files/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

WORKDIR /var/www

# copy just composer file
COPY composer.lock ./composer.lock
COPY composer.json ./composer.json

# copy just npm file
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

# copy just bower.json
COPY .bowerrc ./.bowerrc
COPY bower.json ./bower.json

# install composer, npm and bower dependencies
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && php composer.phar install $COMPOSER_ARG \
    && npm install \
    && bower install --allow-root $BOWER_ARG \
    && mkdir -p -m 777 temp log

# copy rest of app
COPY . ./

RUN npm run build

# run supervisor
CMD ["/usr/bin/supervisord", "-n"]