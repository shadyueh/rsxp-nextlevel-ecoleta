import express, { response } from "express";
const app = express();

app.use(express.json());

const users = ["Diego", "Cleiton", "Robson", "Daniel"];

// usando query params para filtros/paginação
app.get("/users", (request, response) => {
  const search = String(request.query.search);
  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;
  return response.json(filteredUsers);
});

// usando request params
app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
});

// usando request body para atualizar informações
app.post("/users", (request, response) => {
  const data = request.body;
  const user = {
    name: data.name,
    email: data.email,
  };
  return response.json(user);
});

app.listen(3333);
