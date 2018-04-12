const express = require("express")
const app = express()
const port = 3000
const poke = require("./pokeService")

/*
* Let's write our route handlers here!
* 
*/


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    poke.random().then((res) => { console.log(res.name) })
})