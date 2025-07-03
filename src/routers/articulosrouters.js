import express from "express";
import { create, getAll, getById, update } from "../controller/articulosController.js";

const router = express.Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update); 
export default router;
