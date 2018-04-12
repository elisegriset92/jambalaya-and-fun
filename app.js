const express = require("express")
const app = express()
const port = 3000
const poke = require("./pokeService")

const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: 'main-layout' });
hbs.registerPartials(__dirname + '/views/partials');


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/random", (req, res) => {
    poke.random().then(pokemonObject => {
        data = {
            pokemon:
                {
                    name: pokemonObject.name,
                    imageUrl: pokemonObject.sprites.back_default,
                    types: pokemonObject.types.map(t => t.type)
                }
        }
        res.render("random", data)
    })
})
// SOLUTION

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})