const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: "./src/scripts/app.ts",
    sign_up: "./src/scripts/sign_up.ts",
    log_in: "./src/scripts/log_in.ts",
    user_profile: "./src/scripts/user_profile.ts",
    product_details: "./src/scripts/product_details.ts",
    cart: "./src/scripts/cart.ts",
    checkout: "./src/scripts/checkout.ts",
    order_history: "./src/scripts/order_history.ts",
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      filename: "sign_up.html",
      template: "./src/sign_up.html",
      chunks: ["sign_up"],
    }),
    new HtmlWebpackPlugin({
      filename: "log_in.html",
      template: "./src/log_in.html",
      chunks: ["log_in"],
    }),
    new HtmlWebpackPlugin({
      filename: "user_profile.html",
      template: "./src/user_profile.html",
      chunks: ["user_profile"],
    }),
    new HtmlWebpackPlugin({
      filename: "product_details.html",
      template: "./src/product_details.html",
      chunks: ["product_details"],
    }),
    new HtmlWebpackPlugin({
      filename: "cart.html",
      template: "./src/cart.html",
      chunks: ["cart"],
    }),
    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "./src/checkout.html",
      chunks: ["checkout"],
    }),
    new HtmlWebpackPlugin({
      filename: "order_history.html",
      template: "./src/order_history.html",
      chunks: ["order_history"],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8081,
    open: true,
  },
};
