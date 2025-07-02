import React from 'react';
import axios from 'axios';

const BotaoAdicionar = ({ produto }) => {
  const adicionar = async () => {
    const item = {
      produtoId: produto.id,
      // nome: produto.nome,
      // preco: produto.preco,
      // imagem: produto.imagem,
      quantidade: 1
    };

    try {
      await axios.post('http://localhost:3001/carrinho', item);
      alert(`${produto.nome} adicionado ao carrinho`);
    } catch (err) {
      console.error('Erro ao adicionar:', err);
    }
  };

  return <button onClick={adicionar}>🛒 Adicionar</button>;
};
export default BotaoAdicionar;