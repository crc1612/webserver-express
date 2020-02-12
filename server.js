const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express engine HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // res.send('Hello World');
    /* let salida = {
        nombre: 'carlos',
        edad: 33,
        url: req.url
    }; 
    res.send(salida);*/
    res.render('home', {
        nombre: 'carlos'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando Peticiones en el puerto ${ port }`);
});