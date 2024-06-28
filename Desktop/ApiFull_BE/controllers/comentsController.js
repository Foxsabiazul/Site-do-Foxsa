import { db } from "../database/db.js";

export const getUsers= (_, res)=> {
    const sql= "select u.nome, c.comentario from comentarios c join usuarios u on u.id= c.id_usuarios"

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

export const postUsers= (req, res)=> {
    const sql= "insert into comentarios (id_usuario, comentario) values (?,?)";

    const {id_usuario, comentario}= req.body;

    db.query(sql, [id_usuario, comentario], (err, data)=>{
        if(err){
            console.log(`Erro ao processar a requisição1`)
            return res.status(500).json(err);
        }else{
            console.log(`Dados inseridos com sucesso.`)
            return res.status(200).json(data);
        }
    });
};

export const updateUsers= (req, res)=> {
    const sql= "update comentarios set  comentario =? where id = ?";

    const {id_usuario, comentario, id}= req.body;

    db.query(sql, [id_usuario, comentario, id], (err, data)=>{
        if(err){
            console.log(`Erro ao processar a requisição`)
            return res.status(500).json(err);
        }else{
            console.log(`Dados atualizados com sucesso.`)
            return res.status(200).json(data);
        }
    });
};

export const deleteUsers= (req, res)=> {
    const sql= "delete from comentarios where id = ?";

    const {id}= req.query;

    db.query(sql, [id], (err, data)=>{
        if(err){
            console.log(`Erro ao processar a requisição`)
            return res.status(500).json(err);
        }else{
            console.log(`Dados apagados com sucesso.`)
            return res.status(200).json(data);
        }
    });
};