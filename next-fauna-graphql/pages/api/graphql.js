import { gql, ApolloServer } from 'apollo-server-micro'
const cors = require('micro-cors')()

export const config = {
  api: {
    bodyParser: false
  }
}

const books = [
  { title: 'Hello world', author: 'nosnart' },
  { title: 'Next fauna', author: 'kapi' }
]

const typeDefs = gql`
  type Book {
    title: String,
    author: String,
  }

  type Query {
    books: [Book]
  }
`

const resolvers = {
  Query: {
    books: () => books
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {

  },
  introspection: true,
  playground: true,
});

const serversStart = apolloServer.start();

export default cors(async(req, res) => {
  if(req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await serversStart;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});
