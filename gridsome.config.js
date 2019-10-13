// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const FlatMap = require("lodash").flatMap;

const constructWhitelist = (prefixes, colours) => {
  return FlatMap(prefixes, n => {
    return colours.map(colour => `${n}${colour}`);
  });
};

module.exports = {
  siteName: "Pushbutton Blog",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "BlogPost"
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          content: [], // content
          css: [], // css
          whitelist: constructWhitelist(["stroke-", "fill-"], ["primary", "accent-light", "accent-dark"])
        },
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    }
  ],
  templates: {
    BlogPost: "/blog/:title"
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
