require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('sahanidotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at this website</h1>')
})

app.get('/chai',(req,res) => {
    res.send('<h1>chai aur code</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})