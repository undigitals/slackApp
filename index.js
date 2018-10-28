import express from 'express';
import bodyParser from 'body-parser';
import GraphqlHTTP from 'express-graphql'
//import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';


import typeDefs from './schema';
import resolvers from './resolvers';

 export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

 const app = express();
 const graphqlEndpoint = '/graphql';
 app.use(graphqlEndpoint, GraphqlHTTP({ schema, graphiql: true}));
 //app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));
 app.listen(8081);



// import express from 'express'
// import bodyParser from 'body-parser'
// import { graphqlExpress } from 'apollo-server-express'
// import { makeExecutableSchema } from 'graphql-tools';

// import typeDefs from './schema'
// import resolvers from './resolvers'

// export const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// const app = express();

// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// app.listen(8080);