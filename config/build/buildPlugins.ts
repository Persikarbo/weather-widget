import { type WebpackPluginInstance } from "webpack";
import { type BuildOptions } from "./types/config";

const { ProgressPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SVGSpriteLoaderPlugin = require("svg-sprite-loader/plugin");
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
        new SVGSpriteLoaderPlugin({ plainSprite: true }),
    ]
}