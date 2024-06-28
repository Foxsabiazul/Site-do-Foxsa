import { db } from "../database/db.js";

export const getFilmes= (_, res)=> {
    const sql= "select * from filmes"

    db.query(sql, (err, data)=>{
        if(err){
            console.log(`Erro ao processar a requisição`)
            return res.status(500).json(err);
        }else{
            console.log(`Dados obtidos com sucesso.`)
            return res.status(200).json(data);
        }
    });
};