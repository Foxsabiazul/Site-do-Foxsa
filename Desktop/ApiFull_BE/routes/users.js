import express from 'express';
import { deleteUsers, getUsers, postUsers, updateUsers } from '../controllers/comentsController.js';


const router= express.Router();

router.get("/", getUsers);

router.post("/", postUsers);

router.put("/", updateUsers);
router.delete("/", deleteUsers);


export default router;