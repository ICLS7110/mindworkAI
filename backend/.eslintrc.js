modules.export = {
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
        emcaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        quotes: "off",
        "@typescript-eslint/quotes": "error"
    }
};