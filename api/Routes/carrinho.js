import express from 'express';
import {listarCarrinho,adicionarItem,atualizarItem,removerItem,limparCarrinho} from '../Controllers/carrinhocontroller.js';

const router = express.Router();

router.post('/carrinho', adicionarItem);
router.get('/carrinho', listarCarrinho);
router.put('/carrinho/:id', atualizarItem);
router.delete('/carrinho/:id', removerItem);
router.delete('/', limparCarrinho);



export default router;