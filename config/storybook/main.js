module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
            '@storybook/addon-essentials', 
            '@storybook/addon-links',
            '@storybook/addon-notes', 
            '@storybook/addon-viewport', 
            '@storybook/addon-a11y', 
            '@storybook/addon-knobs', 
            '@storybook/addon-actions', 
            '@storybook/addon-docs',
            {
              name: "@storybook/addon-docs",
              options: {
                babelOptions: {
                  presets: [
                    [
                      "@vue/cli-plugin-babel/preset",
                      {
                        jsx: false,
                      },
                    ],
                  ],
                },
              },
            },

          ]
}
