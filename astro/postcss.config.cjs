const autoprefixer = require("autoprefixer")
const postcssImport = require("postcss-import")
const postcssNested = require("postcss-nested")
const postcssCustomMedia = require("postcss-custom-media")
module.exports = {
  plugins: [postcssImport(), postcssNested(), postcssCustomMedia(), autoprefixer()],
}
