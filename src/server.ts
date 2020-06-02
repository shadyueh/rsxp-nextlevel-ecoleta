import express, { response } from "express";
const app = express();

app.get("/users", (request, response) => {
  console.log("listagem de usuários");
  response.send("Hello Ecoleta");
});

app.listen(3333);
