const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StatsWebpackPlugin = require('stats-webpack-plugin')

module.exports = {
    entry: [
        path.join(__dirname, '../src/index.js')
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.ENVIRONMENT': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new StatsWebpackPlugin('stats.json')
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}