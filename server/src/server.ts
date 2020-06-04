import express from "express";
import routes from "./routes";
const app = express();

app.use(express.json());
app.use(routes);
// usando query params para filtros/paginação
app.listen(3333);
