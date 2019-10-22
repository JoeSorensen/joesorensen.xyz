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

        "42474edac4ebfce470ab7261ae9965f8": {
            entry: 'src/ts/gottem.ts',
            template: 'public/42474edac4ebfce470ab7261ae9965f8.html',
            file: '42474edac4ebfce470ab7261ae9965f8.html'
        },

        "404": {
            entry: 'src/ts/404.ts',
            template: 'public/404.html',
            file: '404.html'
        }
    },
};