import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'index.html'),
  title: 'React Boilerplate using webpack2',
  filename: 'index.html',
  inject: 'body',
});

const ExtractTextPluginCSS = new ExtractTextPlugin({
  filename: 'style.[chunkhash].css',
  allChunks: true,
  ignoreOrder: true,
});


const CleanPlugin = new CleanWebpackPlugin(['static']);

const DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('local'),
    API_URL: JSON.stringify('http://localhost:4000/')
  },
});

const ProvidePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
});

const FaviconPlugin = new FaviconsWebpackPlugin({
  logo: path.resolve(__dirname, 'src/assets/images/favicon.png'),
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: false,
  },
});

const config = {
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  entry: './src/app/App.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [ ['es2015',{ modules: false }], 'react'],// insert ] 
          plugins: ['transform-object-rest-spread'],
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        }),
      },
      {
        test: /.(mp4|png|jpg|woff(2)??|eot|otf|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        use: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [CleanPlugin, HTMLWebpackPluginConfig, ExtractTextPluginCSS, ProvidePlugin, FaviconPlugin],
  devtool: 'cheap-source-map',
};

module.exports = config;
