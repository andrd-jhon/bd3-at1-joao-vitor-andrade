const database = 'BD3-NoSQL-MongoDb'

const collection = 'Alunos'

use(database)

db[collection].deleteOne(
    {
        codigo: "2"
    }
)