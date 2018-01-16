Green Light Web
=============

`composer install`
`npm install`
`bower install`
`gulp build`

Docker support
---------------
You can install this project using Docker on your local machine. All you need to do is to go to `docker` folder,
then run command `docker-compose up`. After that, you should be able to reach running application at `localhost:8080`.
You need also some dependencies, which you can obtain by running dependency installation script in container - `docker-compose exec web /var/www/install-dependencies.sh`
and for css build you need to run `docker-compose exec web /var/www/front-end-build.sh`
