import { type ResolveOptions } from "webpack";
import { type BuildOptions } from "./types/config";

module.exports = function buildResolvers({ paths }: BuildOptions): ResolveOptions {

    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [
            paths.src, "node_modules"
        ],
        alias: {
            "@assets": paths.assets
        }
    }
}