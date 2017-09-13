// File to compile all js and jsx into bundle.js?
// Launch development server

var webpack = require('webpack');
var path = require('path');

module.exports = {
entry: [
'./src/index.js'
],
output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
},
devServer: {
    inline: true,
    port: 8000
},
resolve: {
    extensions: ['.js', '.jsx']
},
module: {
    loaders: [
        {
            test: [/\.(js|jsx)$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: [/\.css$/],
            loader: 'style-loader!css-loader'
        }
    ]
}
}