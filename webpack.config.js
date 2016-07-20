var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',//ÈÈ²å°Î¼àÌý
        "./js/app.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};