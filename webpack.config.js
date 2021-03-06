'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const babel = require('./webpack/babel');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const source_map = require('./webpack/source_map');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fonts = require('./webpack/fonts');
const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};
const common = merge([
	{
		context: PATHS.source,
		entry: {
			auth: './components/auth/auth.js',
			header: './pages/header/header.js',
			map: './pages/map/map.js',
			media: './components/media/media.js',
		},
		output: {
			path: PATHS.build,
			filename: "js/[name].js",
			library:  "[name]"
		},
		plugins: [
			new webpack.NoEmitOnErrorsPlugin(),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: [ 'manifest', 'common', 'auth', 'header',  'map', 'media'],
				chunksSortMode: function (chunk1, chunk2) {
					let orders = [ 'manifest', 'common', 'auth', 'header', 'map', 'media'];
					let order1 = orders.indexOf(chunk1.names[0]);
					let order2 = orders.indexOf(chunk2.names[0]);
					if (order1 > order2) {
						return 1;
					} else if (order1 < order2) {
						return -1;
					} else {
						return 0;
					}
				},
				template: './pages/base.pug',
			}),
			/*new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: [ '' ],
				template: './pages/blog.pug',
			}),*/
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common',
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: "manifest",
				minChunks: Infinity
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				"window.Tether": 'tether',
				"Tether": 'tether',
				L: 'leaflet/dist/leaflet.js',
				vis: 'vis/dist/vis.js',
				moment: "moment"
			}),
			new CopyWebpackPlugin([
				{from:'pages/images',to:'images'},
				{from:'components/mechanical/function/info.json',to:''},
				{from:'components/manual/grid/tree.json',to:''},
				// {from:'components/function/job.json',to:''},
			]),
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin()
		],
		resolve: {
			modules: ["node_modules"],
			extensions: ["*", ".js"]
		},
		resolveLoader: {
			modules: ["node_modules"],
			moduleExtensions: ['-loader'],
			extensions: ["*", ".js"]
		}
	},
	pug(),
	babel(),
	images(),
	fonts()
]);
module.exports = function (env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			source_map(),
			css()
		])
	}
};










