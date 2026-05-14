export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: { parser: 'astro' },
        },
    ],
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
};
