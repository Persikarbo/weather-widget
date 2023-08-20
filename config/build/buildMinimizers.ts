import { type WebpackPluginInstance } from "webpack";

const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = function buildMinimizers(): WebpackPluginInstance[] {

  return [
    new TerserPlugin({
      extractComments: false
    }),
    new CssMinimizerPlugin()
  ]
}