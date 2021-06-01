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
        screens: {
            'sm': '576px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1600px',
            // => @media (min-width: 1536px) { ... }
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