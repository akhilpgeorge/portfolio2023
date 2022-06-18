import * as webpack from "webpack";
import * as path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
        modules: [path.resolve(__dirname, "../src"), "../node_modules"]
    },
    output: {
        path: path.resolve(__dirname,"..",".build"),
        filename: '[name].[fullhash:8].js',
        sourceMapFilename: '[name].[fullhash:8].map',
        chunkFilename: '[id].[fullhash:8].js',
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.(tsx|jsx|js|ts)$/,
            loader: "babel-loader",
            exclude: /node_modules/
          },
          {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              {
                loader: "css-loader",
                options: {
                }
              },
    
              { loader: 'postcss-loader' },
              { loader: "sass-loader" },
            ],
    
          },
          {
            test: /\.(sass|less|css)$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader"
            ]
          },
          {
            test: /\.(png|jpe?g|gif|svg|pdf|ico)$/,
            use: [
              {
                loader: "file-loader",
    
                options: {
                  modules: true,
                  name: "assets/images/[name].[ext]"
                }
              }
            ]
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.ejs"
        }),
        new ForkTsCheckerWebpackPlugin(),
        new MiniCssExtractPlugin()
      ]
}

export default config;