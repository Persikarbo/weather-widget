import { type WebpackPluginInstance } from "webpack";
import { type BuildOptions } from "./types/config";

const { ProgressPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SVGSpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {

  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash:8].css",
      chunkFilename: "styles/[name].[contenthash:8].css"
    }),
    new ProgressPlugin(),
    new ESLintPlugin({
      exclude: [ "node_modules", "build" ],
      extensions: [ "ts", "vue" ],
      emitError: true,
      emitWarning: true,
    }),
    new SVGSpriteLoaderPlugin({ plainSprite: true })
  ]
}
