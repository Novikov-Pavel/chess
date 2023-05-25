const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const development = process.env.NODE_ENV === "development";

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: development ? "[name].[contenthash].js" : "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    target: "web",
    devtool: "inline-source-map",
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                test: /\.scss$/gi,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/gi,
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)?$/,
                use: ["file-loader"],
            },
            
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    devServer: {
        port: 5000,
        hot: true,
        open: true,
        liveReload: true,
        static: {
            directory: path.resolve(__dirname, "public"),
        },
    },
};
