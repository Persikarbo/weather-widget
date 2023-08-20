import { type Configuration as WebpackConfiguration } from "webpack";
import { type Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { type BuildOptions } from "./types/config";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const buildPlugins = require("./buildPlugins");
const buildLoaders = require("./buildLoaders");
const buildResolvers = require("./buildResolvers");
const buildDevServer = require("./buildDevServer");
const buildMinimizers = require("./buildMinimizers");

module.exports = function buildWebpackConfig(options: BuildOptions): Configuration {

  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: paths.build,
      clean: true,
      publicPath: "/"
    },
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    optimization: {
      minimizer: buildMinimizers(),
      minimize: true
    },
  }
}