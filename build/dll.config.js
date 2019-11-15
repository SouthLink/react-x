const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const dllPath = path.join(__dirname, '../dist/dll');

const vendors = [
	"antd",
	"classnames",
	"lodash",
	"moment",
	"react",
	"react-dom",
	"react-redux",
	"react-router",
	"redux",
	"redux-thunk"
]

module.exports = {
	output: {
		path: dllPath,
		filename: '[name].dll.js',
		// publicPath: '/static/',
		// library: '[name]_[hash]',
	},
	entry: {
		vendor: vendors,
	}, 
	plugins: [
		// 清除之前的dll文件
		new CleanWebpackPlugin(),
		// 定义环境变量为开发环境
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			IS_DEVELOPMETN: true,
		}),
		// 多核压缩
		new ParallelUglifyPlugin({
			cacheDir: '.cache/',
			uglifyJS: {
				output: {
					comments: false
				},
				compress: {
					// warnings: false
				}
			}
		}),
		new webpack.DllPlugin({
			path: path.join(__dirname, '../dist', 'manifest.json'),
			name: 'dll.[name]',
			context: __dirname,
		}),
	],
};