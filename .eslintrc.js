module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 0,
        'space-before-blocks': 0,
        "eol-last": 0,
        "no-irregular-whitespace":"off"

    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}