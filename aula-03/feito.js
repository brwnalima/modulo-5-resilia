const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/todo', (req, res) => {
    res.send(`Temos as rotas "tarefa" e "usuario".`)
  })

app.get('/tarefa', (req, res) => {
    res.send(`Rota ativada com GET e recurso tarefa: 
    valores de tarefa devem ser retornados.`)
})

app.get('/usuario', (req, res) => {
    res.send(`Rota ativada com GET e recurso usuario: 
    valores de usuario devem ser retornados.`)
})


app.listen(port, () => {
  console.log(`Porta: ${port}`)
})