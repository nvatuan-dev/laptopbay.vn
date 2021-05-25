module.exports = {
    purge: [],
    purge: {
        mode: "layers",
        enabled: process.env.NODE_ENV === "production",
        content: [
            "components/**/*.vue",
            "layouts/**/*.vue",
            "pages/**/*.vue",
            "plugins/**/*.js",
            "nuxt.config.js",
            // TypeScript
            "plugins/**/*.ts",
            "nuxt.config.ts"
        ]
    },
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
            
        },
    },
    variants: {
        extend: {
          boxSizing: ['hover', 'focus'],
        },
        opacity: ['responsive', 'hover'],
        extend: {},
    },
    plugins: [],
    important: true,
    theme: {

    }
}