import { type Configuration } from "webpack";
import { type BuildEnv, type BuildPaths } from "./config/build/types/config";

const path = require("path");
const buildWebpackConfig = require("./config/build/buildWebpackConfig");

module.exports = (env: BuildEnv): Configuration => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    assets: path.resolve(__dirname, "assets")
  }

  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });
};