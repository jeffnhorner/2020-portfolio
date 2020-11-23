// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Gridsome',
    plugins: [],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // enable CSS Modules
                            modules: true,
                            // customize generated class names
                            localIdentName: '[local]_[hash:base64:8]'
                        }
                    },
                ],
            }
        ]
    },
    chainWebpack: config => {
        // This is required to fix a bug asssociated with dynamic g-image src prop binding.
        // see https://github.com/gridsome/gridsome/issues/292#issuecomment-583692119
        config.resolve.alias.set('@images', '~/../static/')
    },
}
