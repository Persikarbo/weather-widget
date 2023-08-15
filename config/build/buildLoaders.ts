import { type RuleSetRule } from "webpack";
import { type BuildOptions } from "./types/config";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function buildLoaders({ isDev, paths }: BuildOptions): RuleSetRule[] {

    const cssLoader = {
        test: /\.(s)css$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ],
    }

    const babelLoader = {
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
    }

    const fontsLoader = {
        test: /\.(woff|woff2)$/i,
        type: "asset/resource",
        generator: {
            filename: "fonts/[hash][ext][query]"
        }
    }

    const iconsLoader = {
        test: /\.svg$/i,
        loader: "svg-sprite-loader",
        options: {
            extract: true
        }
    }

    const imagesLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
            filename: "images/[hash][ext][query]"
        }
    }

    const vueLoader = {
        test: /\.vue$/,
        loader: "vue-loader"
    }

    return [
        vueLoader,
        babelLoader,
        cssLoader,
        fontsLoader,
        iconsLoader,
        imagesLoader,
    ]
}