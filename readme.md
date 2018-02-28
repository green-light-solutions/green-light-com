# Green Light Web 2018


## Prerequisites
- nodejs

If you don't yet have nodejs installed and you are running mac os, I suggest using [nvm](https://github.com/creationix/nvm) (node version manger), which makes managing different node versions a breeze.

## Usage

Clone the repo:

```bash
git clone https://gitlab.green-light.com/radek.podrazky/green-light-2018.git
```

Cd into the project folder

```bash
cd green-light-2018
```

Install node modules

```bash
npm install
```

Build production

```bash
npm run build:prod
```

Build version is available in `dist` folder.

## Development

### Server

For development you can use `webpack-dev-server` by running:

```bash
npm run serve
```

This brings up demo website on [http://localhost:8080](http://localhost:8080).

### Docker

You can use Docker for development environment too. Just run `docker-compose up` command
and Docker will install dependencies for you and will start development server with automatic builds.


### Overriding bootstrap defaults

If you want to override bootstrap default variables you can do that by editing the file `_settings.scss` located in `app/assets/styles` folder.

## Folder structure

<pre>
bootstrap4-webpack3-boilerplate/
├── app/
│   ├── assets
│   │   ├── images
│   │   │   └── nyan.gif
│   │   ├── styles
│   │   │   ├── _settings.scss
│   │   │   └── screen.scss
│   │   └── js
│   │       └── app.js # main webpack entry file
│   └── index.html
├── .babelrc
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
</pre>

## Adding new page
For adding new subpage to project, create new HTML file in `app` folder and add to `webpack.config.js` into `plugins` section this code:

```javascript
new HtmlWebpackPlugin({
	filename: 'loop.html', // filename in dist folder
	template: './loop.html',  // filename in app folder
})
```
