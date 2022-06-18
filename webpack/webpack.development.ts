import commonConfig from "./webpack.common";

const config = {
    ...commonConfig,
    mode: "development",
    devServer: {
        open: true,
        historyApiFallback: true,
        port: 4000
    }
};

export default config;