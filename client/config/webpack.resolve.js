import path from 'path';

export default {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src'),
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
};
