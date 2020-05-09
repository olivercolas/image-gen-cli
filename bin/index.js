#!/usr/bin/env node

const { Command } = require('commander')
const { banner } = require('../utils/figlet')
const { randomImage, randomMeme, displayImage } = require('../utils/img')
const { log } = console

banner('Image Generator')

const program = new Command()

program.option('-i, --get-image', 'get random image')
program.option('-m, --get-meme', 'get random meme')
program.parse(process.argv)
// program functions:
;(async () => {
	if (program.getMeme) {
		try {
			log(await displayImage(await randomMeme))
		} catch (error) {
			log(error)
		}
	}
	if (program.getImage) {
		try {
			log(await displayImage(await randomImage()))
		} catch (error) {
			log(error)
		}
	}
})()
