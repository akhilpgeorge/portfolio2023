import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import commonConfig from "./webpack.common";

const config = {
    ...commonConfig,
    mode: "production",
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
        splitChunks: { chunks: "all" }
    }
    
};

export default config;
