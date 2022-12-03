const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(3000, function() {
    console.log('Example App listening on port 3000!')
})

//http://127.0.0.1:3000/