React basics
============

This is a personal project to learn React technology.
My mentor (who happens to be my brother) and I, will be scratching this repo as an excercise for learning.

This project will need **NodeJS** installed.

Step by Step
------------

If you want to do all from scratch :)

### Initialize your node project

1. Create a new folder `mkdir myReactProject` using the name you prefer and go into it `cd myReactProject`
1. Initialize your Node project `npm init`. You can leave all as npm suggests or change it if you know better.

### Start With an HTML Page

1. Create an HTML page named `index.html` and put some content in it:
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
            <link rel="stylesheet" type="text/css" href="./assets/style.css" type="text/css"/>
            <link href="https://fonts.googleapis.com/css?family=Nunito:800" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Lora:700" rel="stylesheet">
        </head>
        <body>
            <div id="root"></div>
    
            <script src="bundle.js"></script>
        </body>
    </html>
    ```
1. You will need a bunch of dependencies to start with:
    ```
    npm install --save react react-dom @types/react @types/react-dom
    ```
    and some others:
    ```
    npm install --save-dev webpack http-server typescript awesome-typescript-loader source-map-loader
    ```
    1. **react** is what we want to use :)
    1. **react-dom** is the React renderer for Web
    1. **@types/xxx** are type definitions so we can use Typescript easier with these dependencies
    1. **webpack** is our package bundler, it will manage Javascript and style generation and some other nice things
    1. **http-server** we'll need it temporarily until we get webpack running our development server
    1. **typescript** is the main Typescript library and compiler
    1. **awesome-typescript-loader** is a webpack loader for Typescript that knows how to optimize builds during development
    1. **source-map-loader** is a webpack loader for source maps so we can see Typescript code in Chrome Developer Tools.
1. Create a `tsconfig.json` file (you can find it in this very repo)
1. Create a `webpack.config.js` file:
    ```javascript
    module.exports = {
        entry: "./src/index.tsx",
        output: {
            filename: "bundle.js",
            path: __dirname + "/web"
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ]
        },
        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    };
    ```
1. Add react from a CDN to your HTML file:
    ```html
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    ```
    ```html
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    ```
1. Add the following scripts to your `package.json`:
    1. `"build": "webpack"` to build you javascript files
    1. `"start":"http-server ./web -p 8080"` to run a HTTP server to try your stuff.
    1. `"stylus:once": "stylus ./web/assets/style.styl --out ./web/assets/style.css"` to build Stylus files
    1. `"stylus:watch": "stylus --watch ./web/assets/style.styl --out ./web/assets/style.css"` to build Stylus on each file change. 

### Improve our development and build modes

So far, we have to build all our files every time we want to see our page running.
Now we'll add a development server that will take care of recompiling our files on the fly and we also need a handy utility to copy our HTML and perform some minor improvements on it.

```
npm i -D webpack-dev-server html-webpack-plugin
```

Note: the shortcut `i` is for `install` and `-D` is for `--save-dev`.

We also want to change our build stask to build production ready artifacts, which we'll do by adding an extra parameter to webpack (and we'll move also our webpack configuration to a special folder, as we'll be adding more of them):

```
"build": "webpack -p --config webpack/conf.js"
```

And we'll change our `start` script too, to use the Development Server:

```
"start": "webpack-dev-server --config webpack/conf.js",
```

No we want to modify our Webpack configuration:

```javascript
// We need some utilities from Node:
const path = require('path');
const pwd = process.cwd();

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Just writing here chnages resct to previous version
const config = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(pwd, './dist')
    },
    module: {
        rules: [
            // Adding support for stylus
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'}
        ]
    },
    devServer: {
        contentBase: path.resolve(pwd, './no_path'), // Set to no existing path in the project.
        historyApiFallback: {
            rewrites: [
                // For now, we'll rewrite all URLs to our root so we can use HTML5 history API
                { from: /^\//, to: '/' }
            ]
        }
    },
    plugins: [
        // Automatically generate index.html file
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = config;
```

No we can remove the `http-server` and the stylus scripts :)



Running this Repo
-----------------

### Running a local server

* `npm run start` Starts Webpack Development Server

### Build artifacts

* `npm run build` Builds aritifacts with Webpack

### Technology Stack

* **Webpack** To build JS artifacts
* **http-server** To serve a local development version
* **TypeScript** A typed language we'll use instead of Javascript
