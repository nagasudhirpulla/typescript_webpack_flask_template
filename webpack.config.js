const path = require('path');

module.exports = {
    // multiple entry points - https://github.com/webpack/docs/wiki/multiple-entry-points
    entry: {
        home: ['babel-polyfill', path.resolve(__dirname, 'front_end_apps/home/index.ts')],
        monitor: ['babel-polyfill', path.resolve(__dirname, 'front_end_apps/monitoring/index.ts')]
    },

    output: {
        path: path.resolve(__dirname, "static"),
        filename: "[name].dist.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    plugins: [],

    resolve: {
        extensions: ['.ts', '.js'],
    }
};