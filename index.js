const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({
    addVariant,
    e
}) {
    addVariant('selection', ({
        modifySelectors,
        separator
    }) => {
        modifySelectors(({
            className
        }) => {
            return `.${e(`selection${separator}${className}`)} ::selection`
        })
    })
});