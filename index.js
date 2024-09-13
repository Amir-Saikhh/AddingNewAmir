const express = require('express')
require('dotenv').config()
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/hello',(req,res) => {
    res.send('hello Amir')
})
app.get('/amirnbj',(req,res) => {
    res.send(`<h1> Amir Love Nbj </h1>`)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})