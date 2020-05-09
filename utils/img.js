const got = require('got')
const { meme } = require('memejs')
const terminalImage = require('terminal-image')

module.exports = {
	randomImage: async (_) => await got('https://picsum.photos/200').buffer(),
	randomMeme: new Promise((resolve, reject) => {
        meme('crappydesign', async function(err, data) {
            if (err) return reject(err)
            resolve(await got(data.url).buffer())
        })
    }),
	displayImage: async (image) => await terminalImage.buffer(image)
}
