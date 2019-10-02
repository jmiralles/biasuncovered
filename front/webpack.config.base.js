const HtmlWebpackPlugin = require("html-webpack-plugin");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const path = require("path");

//const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
    entry: ["@babel/polyfill", "./src/main.js"],
    output: {
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-syntax-dynamic-import"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.styl(us)?$/,
                exclude: /node_modules/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "stylus-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [require("autoprefixer")]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.template.html"
        }),
        new VueLoaderPlugin()
    ]
};
