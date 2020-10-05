//module.exports = {
// templateFormats: ["md", "css", "html", "liquid", "js"],
// passthroughFileCopy: true,
//};
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
};
