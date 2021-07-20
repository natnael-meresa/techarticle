const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/status', (req, res) =>{
  res.send({
    message: 'hello man'
  })
 })
 
 app.listen(process.env.PORT || 8081)
