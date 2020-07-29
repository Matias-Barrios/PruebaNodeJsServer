const express = require('express')
const digestPayloadAsPlainText = require('./middleware')
const PORT = '8080'

let app = express()

app.use(digestPayloadAsPlainText);

app.post('/hello', (req,res) => {
    res.status(200).send(req.rawBody)
})

app.get('*', (req,res) => {
    res.status(404).send('Not found!\n')
})

app.listen(PORT,() => console.log(`App is running at ${PORT}`))

module.exports = app