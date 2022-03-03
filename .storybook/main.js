const path = require('path');

module.exports = {
  stories: ['../src'],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  webpackFinal(config) {
    // Without'tsconfig-paths-webpack-plugin'
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];

    // With 'tsconfig-paths-webpack-plugin' and tsconfig.json baseUrl setting
    /*
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];
    */

    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    // config.resolve.alias = {
    //   ...config.resolve?.alias,
    //   '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    // };

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    // config.resolve.roots = [
    //   path.resolve(__dirname, '../public'),
    //   'node_modules',
    // ];

    // Add this mjs rule for storybook and framer-motion to work
    // https://github.com/framer/motion/issues/1307
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/,
    });

    return config;
  },
};
