const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/todo', (req, res) => {
    res.send(`Temos as rotas "tarefa" e "usuario".`)
  })

app.get('/todo/tarefa', (req, res) => {
  return res.json({
    "tarefa": [
        {
            "titulo": "estudar",
            "prazo": "1 ano",
            "data de criação": "25.01.2023",
            "data de término": "25.01.2024",
            "status": "em andamento"
        }
    ]
})
})

app.get('/todo/usuario', (req, res) => {
    return res.json({
      "usuário": [
          {
              "nome": "Bruna",
              "email": "sjdwhdjh@gmail.com",
              "senha": "123456"
          }
      ]
  })
  })

app.listen(port, () => {
  console.log(`Rota ativada com GET e recurso tarefa: 
  valores de tarefa devem ser retornados.`)
})