const express = require('express')
const cors = require('cors')

const router = require('./Routes.js');

const app = express();
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(4000, ()=>{
  console.log("Aplicação rodando na porta 4000")
})

app.get('/', (request,response)=>{
  response.send("Hello World")
})