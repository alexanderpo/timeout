var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.jsx',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=1000000' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        secure: false,
        // changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
