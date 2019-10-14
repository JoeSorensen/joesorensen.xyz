module.exports = {
    theme: {
        extend: {
            colors: {
                'glow_blue': '#0700b8',
                'glow_green': '#00ff88'
            }
        }
    },
    plugins: [
        require('tailwindcss-transitions')(),
    ]
}