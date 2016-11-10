var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },

    // This is a proxy to bypass CORS
    proxy: {
        '/api/**': {
            target: 'https://realtime.thetrainline.com',
            secure: true,
            changeOrigin: true,
            pathRewrite: { '^/api': '' }
        }
    }
}).listen(4001, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:4001/');
});