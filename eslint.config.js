import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import html from 'eslint-plugin-html';

export default [
    {
        ignores: ['node_modules/', 'progress.json', 'dist/', 'build/'],
    },
    {
        // eslint-plugin-html extracts the <script> blocks from index.html.
        files: ['**/*.html'],
        plugins: { html },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...prettier.rules,
            'no-console': 'warn',
            'no-unused-vars': 'warn',
        },
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.node,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...prettier.rules,
        },
    },
];
