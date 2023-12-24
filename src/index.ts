import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./Schema";

const main = async () => {


  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
  }))

  app.listen(8080, () => {
    console.log("SERVER RUNNING ON PORT 8080");
  });
};

main().catch((err) => {
  console.log(err);
});