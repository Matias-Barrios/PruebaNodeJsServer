var express = require('express')
var cors = require('cors')
const digestPayloadAsPlainText = require('./middleware')
const PORT = '8080'

let app = express()

app.use(cors())
app.use(digestPayloadAsPlainText)

app.post('/hello', (req,res) => {
    res.header('Content-Type', 'text/plain')
    res.status(200).send(req.rawBody)
})

app.get('*', (req,res) => {
    res.status(404).send('Not found!\n')
})

app.listen(PORT,() => console.log(`App is running at ${PORT}`))

module.exports = app
