module.exports = {
    env: {
        browser: true,
        es6: true,
        node: 1,
    },
    extends: "airbnb-base",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        quotes: "off",
        "@typescript-eslint/quotes": "error",
    },
};
