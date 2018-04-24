import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsWebpackPlugin from 'uglifyjs-webpack-plugin';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import path from 'path';

export default [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        inject: 'body',
        minify: false,
    }),
    new UglifyJsWebpackPlugin({
        test: /\.js($|\?)/i,
        include: path.resolve(__dirname, './src'),
        exclude: './node_modules',
        sourceMap: true,
    }),
    new ExtractTextWebpackPlugin('styles.css'),
];
