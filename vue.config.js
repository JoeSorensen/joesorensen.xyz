module.exports = {
    pages: {
        index: {
            entry: 'src/js/main.js',
            template: 'public/index.html',
            file: 'index.html'
        },

        about: {
            entry: 'src/js/about.js',
            template: 'public/about.html',
            file: 'about.html'
        },

        discord: {
            entry: 'src/js/discord.js',
            template: 'public/discord.html',
            file: 'discord.html'
        },

        heck: {
            entry: 'src/js/heck.js',
            template: 'public/heck.html',
            file: 'heck.html'
        },

        404: {
            entry: 'src/js/404.js',
            template: 'public/404.html',
            file: '404.html'
        }
    }
}