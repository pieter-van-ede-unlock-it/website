const pluginIcons = require('eleventy-plugin-icons');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static/**/*");
    eleventyConfig.addPassthroughCopy({"node_modules/@shoelace-style/shoelace/cdn" : "shoelace"});
    eleventyConfig.addPassthroughCopy({"node_modules/modern-normalize/modern-normalize.css" : "modern-normalize.css"});

    eleventyConfig.addPlugin(pluginIcons, {
        sources: [
            {
                name: 'phosphor',
                path: 'node_modules/@phosphor-icons/core/assets/duotone'
            },
            {
                name: 'devicon',
                path: 'static/iconify/devicon'
            }
        ]
    });
};