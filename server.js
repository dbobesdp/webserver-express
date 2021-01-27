const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

// Mostrar carpeta publica
app.use(express.static(__dirname + '/public'));

// Puerto
// const port = process.env.PORT || 3000;
app.set('Port', process.env.PORT || 3000);

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'fErNando',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(app.get('Port'), () => {
  console.log('Escuchando en el puerto', app.get('Port'));
});