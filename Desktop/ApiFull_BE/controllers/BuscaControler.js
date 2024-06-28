import { db } from "../database/db.js";

export const getNamelles = (req, res) => {
    const sql = "select * from filmes where nome like = %?";

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