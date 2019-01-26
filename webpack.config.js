const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: ['./src/js/index.js', './src/scss/style.scss'],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: [
					process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({ filename: 'style.css' })
	],
	devServer: {
		contentBase: './public',
		hot: true
	}
}
