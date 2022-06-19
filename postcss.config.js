/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const tailwindcss = require("tailwindcss");
module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer")
    ]
};
