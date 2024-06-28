import express from 'express';
import { getNamelles } from '../controllers/BuscaControler.js';


const router= express.Router();

router.get("/", getNamelles);


export default router;