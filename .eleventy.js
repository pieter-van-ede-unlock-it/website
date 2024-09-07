const pluginIcons = require('eleventy-plugin-icons');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static/**/*");
    eleventyConfig.addPassthroughCopy({"node_modules/@shoelace-style/shoelace/cdn" : "shoelace"});

    eleventyConfig.addPlugin(pluginIcons, {
        sources: [
            {
                name: 'phosphor',
                path: 'node_modules/@phosphor-icons/core/assets/duotone'
            }
        ]
    });
};