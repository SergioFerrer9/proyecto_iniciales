var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.get('/iniciales', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo, Iniciales!' })   
  })

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)