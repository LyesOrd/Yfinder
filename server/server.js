//server.js
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
})


const path = require('path');

// Définir le chemin vers le fichier test.js en utilisant le chemin relatif
const testFilePath = path.join(__dirname, 'callAPI.js');

// Définir la route 'recherche'
app.get('/recherche', (req, res) => {
  // Charger ou exécuter le fichier test.js
  require(testFilePath);
  
  // Envoyer une réponse au client
  res.send('Le fichier test.js a été exécuté depuis la route /recherche');
});

var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})
