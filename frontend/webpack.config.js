const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const getFilesFromDir = require('./config/files');

const PAGE_DIR = path.join('src', 'pages', path.sep);

const htmlPlugins = getFilesFromDir(PAGE_DIR, ['.html']).map((filePath) => {
  const fileName = filePath.replace(PAGE_DIR, '');
  return new HtmlWebPackPlugin({
    chunks: [fileName.replace(path.extname(fileName), ''), 'vendor'],
    template: filePath,
    filename: fileName,
  });
});

const entry = getFilesFromDir(PAGE_DIR, ['.js']).reduce((obj, filePath) => {
  const entryChunkName = filePath.replace(path.extname(filePath), '').replace(PAGE_DIR, '');
  obj[entryChunkName] = `./${filePath}`;
  return obj;
}, {});

module.exports = {
  entry,
  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin(),
    new CopyPlugin([
      {
        from: 'src/assets/icons',
        to: 'assets/icons',
      },
    ]),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src', 'components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpe?g|png)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[contenthash].[ext]',
            outputPath: 'assets/images'
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  devServer: {
    port: 3100,
    compress: true,
    stats: 'errors-only',
    open: true,
    inline: true,
    hot: true,
  },
};
