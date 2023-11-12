const database = require('./connection')

class TaskController {
    novoAluno(request, response){

        const {name, nickname, email, senha} = request.body

        console.log(name, nickname, email, senha)

        database.insert({name, nickname, email, senha}).table("usuario").then(data=>{
            console.log(data)
            response.json({message: "Aluno criado com sucesso !"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new TaskController()