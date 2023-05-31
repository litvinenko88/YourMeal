const path = require("path");
const isDev = process.env.NODE_ENV === "development";
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
const isProd = !isDev;

const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: filename("js"),
  },

  optimization: optimization(),

  plugins: [
    //Копируем файлы с одной папки в другую
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src/img/logo.png"),
    //       to: path.resolve(__dirname, 'dist/img')
    //     },
    //   ],
    // }),
    //Очищаем папку dist
    new CleanWebpackPlugin(),

    new HTMLWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),

    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            // loader: MiniCssExtractPlugin.loader,
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
