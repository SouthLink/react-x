const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const port = 3010;

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    mode: 'development',
    entry: [path.join(__dirname, "../src/client/index.js")],
    devtool: 'source-map',
    // devtool: 'source-cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].bundle.js',
        // publicPath: '/static/' // 静态资源路径
    },
    resolve: {
        alias: {
            '@': resolve('src'),
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
    },
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: port,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '../dist'),
    },
    optimization: {
        splitChunks: {
          chunks: "all",
        },
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(), // 热模块替换
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html'),
        }),
        // 抽取CSS
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // 默认全局常量
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev'),
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
            allChunks: true,
        }),
        // dll
        new webpack.DllReferencePlugin({
            // DllReferencePlugin 的 context 必须和 package.json 的同级目录
            context: path.join(__dirname, '../'),
            manifest: path.join(__dirname, '../dist/manifest.json'),
        }),
        // 添加dll链接到index.html
        new AddAssetHtmlPlugin({
            filepath: path.join(__dirname, '../dist/dll/vendor.dll.js'),
        }),
        // new OpenBrowserPlugin({
        //     url: `http://localhost:${port}/`,
        // }),
        // 多线程打包
        // new HappyPack({
        //     id:'reactJs',
        //     loaders:['babel-loader?cacheDirectory'],
        //     threadPool: happyThreadPool,
        //     verbose: true,
        // })
    ],
    module: {
        rules: [{
            // yarn add babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime   @babel/preset-react --dev
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader"
            }],
        }, {
            test: '/\.css$/',
            use:  [
                MiniCssExtractPlugin.loader,
                "css-loader", 
                "postcss-loader",
                "less-loader"
            ]
        }, {
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader", 
                "postcss-loader",
                "less-loader"
            ]
        }, {
            test: /\.(eot|woff2?|ttf|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                  name: '[name]-[hash:5].min.[ext]',
                  limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                  publicPath: 'fonts/',
                  outputPath: 'fonts/'
                }
              }]
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: 'images/[name].[ext]?[hash]',
                }
            }]
        }, {
            test: /.(png|jpg|jpeg|gif|svg)$/,
            use: [{
                loader: "url-loader",
                options: {
                    name: 'images/[name].[ext]?[hash]',
                    limit: 10 * 1024
                }
            }]
        }]
    }
}