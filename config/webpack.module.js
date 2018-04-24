import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    rules: [{
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react'],
                plugins: ['transform-runtime'],
            },
        },
        exclude: /node_modules/,
    }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'file',
    }, {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
    }, {
        test: /\.html$/,
        exclude: path.resolve(__dirname, './src/index.html'),
        loader: 'ng-cache-loader?prefix=[dir]/[dir]',
    }],
};
