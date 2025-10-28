import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    // Base JavaScript rules
    js.configs.recommended,

    // TypeScript rules
    ...tseslint.configs.recommended,

    // Astro-specific rules
    ...eslintPluginAstro.configs.recommended,

    {
        rules: {
            'no-console': 'error', // Error on console.log
            'no-unused-vars': 'error', // Error on unused variables
            '@typescript-eslint/no-unused-vars': 'error', // Error on unused variables in TypeScript
            'no-debugger': 'error',
            'prefer-const': 'error',
        },
    },
    {
        ignores: ['dist/', 'node_modules/', '.astro/', 'public/', '**/*.config.js'],
    },
];
