const path = require('path');

module.exports = {
    entry: './src/index.js',  // The entry point for your app
    output: {
        filename: 'bundle.js',  // The bundled output file
        path: path.resolve(__dirname, 'dist'),  // Output directory
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
        },
    },
};
