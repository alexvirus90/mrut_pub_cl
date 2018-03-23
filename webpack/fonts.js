module.exports = function () {
	return {
		module: {
			rules: [
				{
					test: /(fontawesome-webfont|fa-(regular|solid|brands)-(400|900)|gijgo-material).(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
					use: [{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
							publicPath: '../'
						}
					}]
				}
			]
		}
	};
};
