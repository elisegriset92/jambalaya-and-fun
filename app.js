const express = require('express');
const app = express();
const port = 3000;
const poke = require('./pokeService');
const hbs = require('hbs');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.set('layout', __dirname + '/views/layout.hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res, next) => {
  res.render('home');
});

app.get('/random', (req, res, next) => {
  const promise = poke.random();

  promise.then(pokemonObject => {
    res.render('random', {name: pokemonObject.name, imageUrl: pokemonObject.sprites.back_default});
  });
});
/*
* Let's write our route handlers here!
*/

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  poke.random().then(res => {
    console.log(res.name);
  });
});
