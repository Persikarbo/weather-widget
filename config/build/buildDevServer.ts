import { type BuildOptions } from "./types/config";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";

module.exports = function buildDevServer({ port }: BuildOptions): DevServerConfiguration {

    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}