module.exports = {
    pages: {
        index: {
            entry: 'src/ts/main.ts',
            template: 'public/index.html',
            file: 'index.html'
        },

        about: {
            entry: 'src/ts/about.ts',
            template: 'public/about.html',
            file: 'about.html'
        },

        discord: {
            entry: 'src/ts/discord.ts',
            template: 'public/discord.html',
            file: 'discord.html'
        },

        heck: {
            entry: 'src/ts/heck.ts',
            template: 'public/heck.html',
            file: 'heck.html'
        },

        404: {
            entry: 'src/ts/404.ts',
            template: 'public/404.html',
            file: '404.html'
        }
    },

    /*publicPath: process.env.NODE_ENV === 'production'
        ? '/joesorensen.xyz/'
        : '/'*/
}