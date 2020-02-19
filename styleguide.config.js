module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  title: 'react-skeleton',
  styleguideDir: 'dist-docs',
  exampleMode: 'expand',
  usageMode: 'expand',
  sections: [
    {
      name: 'Overview',
      content: 'docs/overview.md',
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'SkeletonBlock',
          content: 'src/components/SkeletonBlock/Readme.md',
        },
        {
          name: 'SkeletonCircle',
          content: 'src/components/SkeletonCircle/Readme.md',
        },
        {
          name: 'SkeletonText',
          content: 'src/components/SkeletonText/Readme.md',
        },
        {
          name: 'Base',
          content: 'src/components/Base/Readme.md',
        },
      ],
    },
  ],
};
