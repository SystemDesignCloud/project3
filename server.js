const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res) { res.sendfile(__dirname+'/index.html')})

app.get('/login', function(req, res) { res.send('Welcome to login page!')})
app.get('/mobile', function(req, res) { res.json({'Name ' : 'Subra', 'Role' : 'Software Architect'})})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
