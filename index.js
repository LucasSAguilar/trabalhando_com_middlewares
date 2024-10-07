import express from "express";
import dotenv from "dotenv"
import avisarConsoleAcesso from "./middlewares/avisarConsoleAcesso.js";
import usuarioInteressado from "./middlewares/usuarioInteressado.js";

dotenv.config();

const app = express();

app.use(avisarConsoleAcesso)

app.get("/", (req, res) => {
    res.send("Página home")
})
app.get("/buy", usuarioInteressado, (req, res) => {
    res.send("Página buy")
})


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}/`);
})