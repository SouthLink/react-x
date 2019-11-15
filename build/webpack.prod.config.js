const path = require('path');

module.exports = {
    mode: 'production',
    entry: '',
    output: {
        path: path.resolve(__dirname, 'dist'),
        file: __dirname + 'public/static/js',
    },
    resolve: {
        alias: {
            '@': resolve('src'),
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        hot: false,
        host: '0.0.0.0',
        port: port
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        // 全局常量
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
            context: __dirname,
            manifest: require('./manifest.json'),
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${port}/`,
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: [
                resolve('src')
            ]
        }, {
            test: '/\.css$/',
            use: [{
                loader: 'css-loder',
                options: {
                    modules: true
                },
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }]
                })
            }]
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('autoprefixer')(),
                        ]
                    }
                }, {
                    loader: 'less-loader'
                }]
            })

        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 100 * 1024,
                    minetype: "application/font-woff"
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
            test: /.(png)|(jpg)|(jpeg)|(gif)$/,
            use: [{
                loader: "url-loader",
                options: {
                    name: 'images/[name].[ext]?[hash]',
                    limit: 100 * 1024
                }
            }]
        }]
    }
}