const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
	entry: ['babel-polyfill', './src/js/index.js', './src/scss/style.scss'],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({ filename: 'style.css' })
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
							reloadAll: true
						}
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpe?g|gif|mp3|mp4|ttf|wav|png|svg)$/,
				use: ['url-loader?limit=10000']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/public',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './public',
		hot: true
	},
}
