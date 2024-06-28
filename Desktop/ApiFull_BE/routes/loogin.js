import express from 'express';
import { getUsersByNome, postLoogin } from '../controllers/loginControler.js';

const router= express.Router();


router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getUsers(req, res);

    if (params.id)
        return getUsersById(req, res);
    else if (params.nome)
        return getUsersByNome(req, res);
    else if (params.titulo)
        return getReceitaByTitulo(req, res);
});

router.post("/", postLoogin)

export default router;