import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js';
import looginRoutes from './routes/loogin.js';
import buscaRoutes from './routes/Busca.js';
import filmesRoutes from './routes/filmes.js'

const app= express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/loogin", looginRoutes);
app.use("/busca", buscaRoutes);
app.use("/filmes", filmesRoutes);

const port= process.env.PORT || 8080

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`);
});