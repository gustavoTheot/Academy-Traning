const { response } = require('express')
const express = require('express')
const cors = require('cors');
const routes = require('./routes')

const app = express()

app.use(cors())

app.use((request, response, next) => {
    console.log("Acessou o Mddleware")
    next();
})

app.use(express.json() )
app.use(routes)

app.listen(3333)