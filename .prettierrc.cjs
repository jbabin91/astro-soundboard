/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-astro'],
  singleQuote: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
