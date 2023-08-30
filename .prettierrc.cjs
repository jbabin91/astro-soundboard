/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
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
