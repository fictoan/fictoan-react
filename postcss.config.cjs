const postcssNesting = require("postcss-nesting");
const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        postcssNesting,
        autoprefixer,
    ],
};
