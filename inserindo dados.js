const database = 'BD3-NoSQL-MongoDb'
use(database)

const collection = 'Alunos'

db[collection].insertMany(
    [
        {
          "codigo": "1",
          "nome": "Ana Silva",
          "cpf": "123.456.789-00",
          "rg": "12.345.678-9"
        },
        {
          "codigo": "2",
          "nome": "Carlos Oliveira",
          "cpf": "234.567.890-11",
          "rg": "23.456.789-0"
        },
        {
          "codigo": "3",
          "nome": "Maria Santos",
          "cpf": "345.678.901-22",
          "rg": "34.567.890-1"
        },
        {
          "codigo": "4",
          "nome": "João Pereira",
          "cpf": "456.789.012-33",
          "rg": "45.678.901-2"
        },
        {
          "codigo": "5",
          "nome": "Lucia Costa",
          "cpf": "567.890.123-44",
          "rg": "56.789.012-3"
        },
        {
          "codigo": "6",
          "nome": "Roberto Almeida",
          "cpf": "678.901.234-55",
          "rg": "67.890.123-4"
        },
        {
          "codigo": "7",
          "nome": "Fernanda Lima",
          "cpf": "789.012.345-66",
          "rg": "78.901.234-5"
        },
        {
          "codigo": "8",
          "nome": "Gustavo Martins",
          "cpf": "890.123.456-77",
          "rg": "89.012.345-6"
        },
        {
          "codigo": "9",
          "nome": "Patrícia Souza",
          "cpf": "901.234.567-88",
          "rg": "90.123.456-7"
        },
        {
          "codigo": "10",
          "nome": "Ricardo Castro",
          "cpf": "012.345.678-99",
          "rg": "01.234.567-8"
        }
      ]
      
)


