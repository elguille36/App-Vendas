import express from 'express';
import {listarCarrinho,adicionarAoCarrinho,removerDoCarrinho,limparCarrinho} from '../Controllers/carrinhocontroller.js';

const router = express.Router();

router.get('/carrinho', listarCarrinho);
router.post('/carrinho', adicionarAoCarrinho);
router.delete('/carrinho/:id', removerDoCarrinho);
router.delete('/carrinho', limparCarrinho);



export default router;