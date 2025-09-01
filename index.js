import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";

dotenv.config();

const typeDefs = `
  type Query {
    hello: String
    sayHello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: () => "hello raza",
    sayHello: (_, { name }) => {
      return `hello ${name} `;
    },
  },
};

const app = express();
const port = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/graphql", expressMiddleware(server));

app.listen(port, () => {
  console.log(`Server Listening On PORT: ${port}`);
});
