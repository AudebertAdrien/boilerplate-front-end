const webpack = require('webpack');

module.exports = {
  target: 'web',

  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      WEBPACK_BASE_URL: JSON.stringify('http://localhost:3000'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
