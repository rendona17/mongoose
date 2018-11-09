const express = require('express')

const db = require('./db')

const app = express()

app.get('/dishes') , (req,res) => {
	console.log('>> HOLA DISHES')
	res.json({
		success: true,
		message: 'Hola dishes'
	})
}

app.listen(8080,() => {
	console.log('I am up Koders in port 8080')
	db.connect()
		.then(() => { console.log('db conectada!') })
		.catch(error => console.error('db error al conectar'));
});