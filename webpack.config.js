const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3001,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    //   {
    //     test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    //     use: [
    //       {
    //         loader: "file-loader",
    //         options: {
    //           name: "[name].[ext]",
    //           outputPath: "../fonts/",
    //           publicPath: "../static/fonts",
    //         },
    //       },
    //     ],
    //   },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
