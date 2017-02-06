const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//put the dependencies from package.json here. Contains the items which update less often
const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router', 'redux'
];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js' //chunkhash adds a hash which is changed only when the bundle is modified. This helps browser caching and alos makes sure the customers get the latest version of the scriptsnpm ins
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/

            }
        ]
    },
    plugins: [
        //CommonsChunkPlugin -> this plugin is used to move the vendor scripts from bundle.js to the vendor.js file. vendor scripts are added in bundle by imports. This plugin makes sure they will be present only in vendor.js
        //Manfiest -> is a helper js file which decides if the vendor.js bundle was changed or not
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        //this plugin generates the index.html with the script chunks tags added automatically
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

};