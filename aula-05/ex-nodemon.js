/* 
* Após a instalação no nodemon global:
* npm install nodemon -g
* 
*/


import express from "express"

const app = express()
const port = 3000

app.get ('/', (req, res) => {
    res.send("<h1 align='center'>Olá, mundo!</h1>")
})

app.listen(port, () => {
    console.log(`Porta: ${port}`);
})