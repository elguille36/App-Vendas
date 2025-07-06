import express from 'express';
import chalk from 'chalk'
import {listarProduto,criar,atualizar,excluir} from '../Controllers/produtocontroller.js'

const router = express.Router();
 
router.get('/produto', listarProduto);
router.post('/', criar);
router.put('/:id', atualizar);
router.delete('/:id', excluir);

export default router;

console.log(chalk.bgBlue`Rotas Produtos Funcionando`)