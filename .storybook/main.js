module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@chakra-ui/storybook-addon"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "refs": {
    '@chakra-ui/react': {
      "disable": true,
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": "@emotion/react",
          "emotion-theming": "@emotion/react",
        },
      },
    };
  },
}