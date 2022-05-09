const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

    eleventyConfig.addCollection("perso", function (collectionApi) {
        return collectionApi.getFilteredByTag("perso").sort(function (a, b) {
            return a.fileSlug.localeCompare(b.fileSlug);
        });
    });

    eleventyConfig.addCollection("eglise", function (collectionApi) {
        return collectionApi.getFilteredByTag("eglise").sort(function (a, b) {
            return a.fileSlug.localeCompare(b.fileSlug);
        });
    });

    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("google52ddf0c0d3761871.html");


    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {

        if (this.outputPath && this.outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                sortAttributes: true,
                sortClassName: true,
                removeAttributeQuotes: true,
                removeStyleLinkTypeAttributes: true,
            });
            return minified;
        }

        return content;
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};