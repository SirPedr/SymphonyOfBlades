const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  output: {
    publicPath: "/",
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
      contentBase: path.resolve(__dirname, "./dist"),
      port: 3000,
      historyApiFallback: true
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ],
  },
};
