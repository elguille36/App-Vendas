import express from 'express';
import {listarTodos,listarPorCategoria,criar,atualizar,excluir} from '../Controllers/produtocontroller.js'

const router = express.Router();
 
router.get('/', listarTodos);
router.get('/categoria/:categoria', listarPorCategoria);
router.post('/', criar);
router.put('/:id', atualizar);
router.delete('/:id', excluir);

export default router;