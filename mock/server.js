const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/api/list', (req, res) => {
  fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
    if (err) {
      return res.status(500).send('Server is error...')
    }
    res.send({
      code: 0,
      data: JSON.parse(data.toString()),
      msg: 'ok',
    })
  })
})

app.post('/api/list', (req, res) => {
  const str = JSON.stringify(req.body, null, '\t')
  fs.writeFile(path.join(__dirname, 'db.json'), str, function(err) {
    if (err) {
      return res.status(500).send('Server is error...')
    }
    res.send({
      code: 0,
      msg: 'ok',
    })
  })
})

const port = 3000
const server = app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
