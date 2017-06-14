var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Patch = require("react-hot-loader/patch");

module.exports = {
    entry: {
        app: [
            "react-hot-loader/patch"
            , "./app/scripts/file1.tsx"
            , "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'deploy'),
        publicPath: "deploy",
        filename: '[name]bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // Add the loader for .ts files.
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: ["react-hot-loader/webpack", "awesome-typescript-loader"],
                include: path.join(__dirname, 'app/scripts')
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", use: "css-loader!sass-loader" })
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendorbundle.js",
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
        , new ExtractTextPlugin({
            filename: 'style-[name]-[contenthash].css',
            allChunks: true
        })
        , new webpack.HotModuleReplacementPlugin()
    ]
};