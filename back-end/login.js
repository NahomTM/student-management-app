const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const loginController = require('./controller/login')

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())

app.post('/login', loginController )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})