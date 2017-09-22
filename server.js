const express = require('express')
const app = express()
const config = require('./config/config')


app.listen(config.port, (err) => {
	if (err) console.log('ups something error', err)
		console.log("server running on " + config.port)
})