import express from "express";
import dotenv from "dotenv";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import createGraphQL from "./src/graphql/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const gqlServer = await createGraphQL();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/graphql", expressMiddleware(gqlServer));

app.listen(port, () => {
  console.log(`Server Listening On PORT: ${port}`);
});
