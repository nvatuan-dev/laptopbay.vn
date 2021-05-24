const fonts = require('./constants/tailwindcss/fonts.js')
module.exports = {
    purge: [],
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: {
                default: '1rem'
            }
        },
        screen: {
            'sm': { 'min': '576px' },
            'md': { 'min': '768px' },
            'lg': { 'min': '1024px' },
            'xl': { 'min': '1280px' },
            '2xl': { 'min': '1400px' }
        },
        extend: {
            fontFamily: fonts,
        },
    },
    variants: {
        opacity: ['responsive', 'hover'],
        extend: {},
    },
    plugins: [],
    important: true,
    theme: {

    }
}