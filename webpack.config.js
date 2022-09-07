const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './src/index.js',
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //         },
            //         'css-loader'
            //     ]
            // },
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     exclude: [/node_modules/, /\.dev/],
            //     use: [
            //         {
            //             loader: 'eslint-loader',
            //             options: {
            //             formatter: require('eslint/lib/cli-engine/formatters/stylish')
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // }
        ]
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     { from: './src/app/images/icon.svg', to: 'images/'},
        //     { from: './src/app/config.json'}
        // ]),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
          }),
    ],
    // devServer: {
    //     contentBase: path.join(__dirname),
    //     compress: true,
    //     // port: 9001,
    //     index: 'index.html'
    // }
}