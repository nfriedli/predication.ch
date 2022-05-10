const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

    // Trier les 2 collections par slug
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

    // Copier les fichier nécessaires à la racine
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("google52ddf0c0d3761871.html");

    // Configurer la compression du HTML (et CSS)
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {

        if (this.outputPath && this.outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                collapseWhitespace: true,
                minifyCSS: true,
                preserveLineBreaks: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeStyleLinkTypeAttributes: true,
                sortAttributes: true,
                sortClassName: true,
                useShortDoctype: true,
            });
            return minified;
        }

        return content;
    });

    // Choisir les répertoires d'entrée et de sortie
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};