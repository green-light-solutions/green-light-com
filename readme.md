# Green Light Web

## Usage

```bash
git clone git@github.com:green-light-solutions/green-light.com.git
cd green-light.com
yarn
yarn build:prod
rm -rf docs
mv temp docs
```

## Development

### Server

For development you can use `webpack-dev-server` by running:

```bash
yarn serve
```

This brings up demo website on [http://localhost:8080](http://localhost:8080).
