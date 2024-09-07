const pluginIcons = require('eleventy-plugin-icons');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static/**/*");

    eleventyConfig.addPlugin(pluginIcons, {
        sources: [
            {
                name: 'phosphor',
                path: 'node_modules/@phosphor-icons/core/assets/duotone'
            }
        ]
    });
};