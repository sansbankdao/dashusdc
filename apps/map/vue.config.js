const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                config: {
                    path: path.resolve(__dirname, 'postcss.config.js'),
                },
            },
        },
    },
}
