// @flow
import path from 'path';
import webpack from 'webpack';
import { WDS_PORT } from './src/shared/config';
import { isProd } from './src/shared/util';

export default {
    entry: ['react-hot-loader/patch', './src/client'],
    output: {
        filename: 'js/bundle.js',
        path: (path.resolve(__dirname, 'dist'): string),
        publicPath: (isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`: string),
    },
    module: {
        rules: [
            { test: (/\.(js|jsx)$/: RegExp), use: 'babel-loader', exclude: (/node_modules/: RegExp) },
        ],
    },
    devtool: (isProd ? false : 'source-map': boolean | string),
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: WDS_PORT,
        hot: false,
        client: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    },
    plugins: [
        (new webpack.ProvidePlugin({ process: 'process/browser' }): any),
        (new webpack.HotModuleReplacementPlugin(): any),
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    mode: 'production',
};
