import path from 'path';

import module from './webpack.module';
import plugins from './webpack.plugins';
import resolve from './webpack.resolve';
import devServer from './webpack.dev-server';

export default (env, options) => {
    const isProduction = options.mode === 'production';
    return {
        entry: {
            app: './src/index.js',
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: 'http://localhost:3000/',
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
        },
        module,
        plugins,
        devServer,
        resolve,
        devtool: isProduction ? 'none' : 'source-map',
        mode: isProduction ? 'production' : 'development',
    };
};
