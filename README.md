React basics
============

This is a personal project to learn React technology.
My mentor (who happens to be my brother) and I, will be scratching this repo as an excercise for learning.

Development
-----------
Project will need **NodeJS** installed.

First steps:
Create index.html
Init the project: `npm init`
Install React and ReactDOM:

````
npm install --save react react-dom @types/react @types/react-dom
````

Install webpack and http-server

````
npm install --save-dev webpack
````

````
npm install --save-dev http-server
````

And this:

````
npm install --save-dev typescript awesome-typescript-loader source-map-loader
````

Create a `tsconfig.json` and `webpack.config.js` files (you can find it in this very repositorie)
Link React and ReactDOM libraries like this:
````
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
````
````
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
````

Add the following code into the scripts section of the `packege.json` for webpack and for run a local server through **http-server**

````
build: "webpack",
````

````
start": "http-server ./web -p 8080,
````

And for stylus:

````
stylus:once": "stylus ./web/assets/style.styl --out ./web/assets/style.css",
````

````
stylus:watch": "stylus --watch ./web/assets/style.styl --out ./web/assets/style.css",
````


### Running a local server

* `npm run start` Starts Webpack Development Server

### Build artifacts

* `npm run buid` Builds aritifacts with Webpack

### Technology Stack

* **Webpack** To build JS artifacts
* **http-server** To serve a local development version
