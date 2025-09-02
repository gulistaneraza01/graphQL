import { ApolloServer } from "@apollo/server";
import User from "./auth.js/index.js";

const typeDefs = `
  type Query {
    hello:String
    ${User.queries}
  }

  type Mutation {
    ${User.mutations}
  }
`;

const resolvers = {
  Query: {
    ...User.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
  },
};

async function createGraphQL() {
  const gqlServer = new ApolloServer({ typeDefs, resolvers });
  await gqlServer.start();
  return gqlServer;
}

export default createGraphQL;
