const path = require("path");
// const nodeExternals = require("webpack-node-externals");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "node",
  output: {
    publicPath: "/dist/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./src/index.html"),
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
      contentBase: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          MiniCssExtractPlugin.loader,
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                auto: /\.scss$/,
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[local]--[hash:base64:5]',
                exportGlobals: true,
              }
            }
          },
         "sass-loader"
        ]
      }
    ],
  },
};