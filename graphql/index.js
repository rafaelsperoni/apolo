import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { CursosController } from "../controllers/CursosControllers.js"
import { ProfessoresController } from "../controllers/ProfessoresController.js"

const typeDefs = `#graphql
    type Professor{
        id: Int
        nome: String
        email: String!
    }

    type Curso{
        id: Int
        nome: String
        descricao: String!
        coordenador: Professor
    }

    type Query{
        professores(id:Int): [Professor]
        cursos(id:Int): [Curso]
    }
`

const cursos = new CursosController()
const professores = new ProfessoresController()

const resolvers = {
    Query: {
        professores: (_,args) => professores.getProfessores(args.id),
        cursos: (_,args) => cursos.getCursos(args.id),
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000},
})

console.log(`🚀  Server ready at: ${url}`)