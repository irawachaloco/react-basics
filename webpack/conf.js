// We need some utilities from Node:
const path = require('path');
const pwd = process.cwd();

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is our configuration object for Webpack.
const config = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(pwd, './dist')
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

            // All output '.js' files will have any source map re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

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

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        // Automatically generate index.html file
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = config;