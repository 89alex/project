var webpack = require('webpack');
module.exports = {
    entry: [
<<<<<<< HEAD
      'webpack/hot/only-dev-server',
      "./js/app.js"
=======
        'webpack/hot/only-dev-server',//ÈÈ²å°Î¼àÌý
        "./js/app.js"
>>>>>>> 1323ff80d5970453c0f617393be8e85ba132b6d2
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
<<<<<<< HEAD
      new webpack.NoErrorsPlugin()
=======
        new webpack.NoErrorsPlugin()
>>>>>>> 1323ff80d5970453c0f617393be8e85ba132b6d2
    ]
};