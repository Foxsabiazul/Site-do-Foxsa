import { db } from "../database/db.js";

export const getUsersById = (req, res) => {
    const sql = "select * from usuarios where id = ?";

    const {id} = req.query;

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getUsersByNome = (req, res) => {
    const sql = "select * from usuarios where nome = ?";

    const {nome} = req.query;

    db.query(sql, [nome], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const postLoogin= (req, res)=> {
    const sql= "insert into usuarios (nome, email, senha) values (?,?,?)";

    const {nome, email, senha}= req.body;

    db.query(sql, [nome, email, senha], (err, data)=>{
        if(err){
            console.log(`Erro ao processar a requisição1`)
            return res.status(500).json(err);
        }else{
            console.log(`Dados inseridos com sucesso.`)
            return res.status(200).json(data);
        }
    });
};