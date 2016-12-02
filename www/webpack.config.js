module.exports = {
  entry: [__dirname + '/js/index.js'],
  output: {
    path: __dirname + '/',
    filename: 'dist.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
};
