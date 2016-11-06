var path = require('path');
var webpack = require('webpack');
require('es6-promise').polyfill()

module.exports = {
    entry: ['webpack-dev-server/client', path.normalize(__dirname + '/src/js/main')],
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: path.normalize(__dirname + '/src/js/')
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src', 'js')],
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },
            {
                loader: 'style!css',
                test: /\.css$/,
                include: [path.resolve(__dirname, 'src', 'css')]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'features': {
                'enableFilter': true
            }
        })
    ]
};
