const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              },
         ]
    },
    plugins: [
        new HTMLWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
       // [new MiniCssExtractPlugin()]
       new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ]
};