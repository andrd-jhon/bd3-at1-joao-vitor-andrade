const database = 'BD3-NoSQL-MongoDb'

const collection = 'Alunos'

use(database)

db[collection].updateOne(
    {
        codigo : "1"
    },
    {
        $set:{
            nome: "Ana Silva dos Santos",
            cpf: "123.456.789-10",
            rg: "12.456.789-9"
        }
    }
)