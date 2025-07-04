import React from 'react';
import axios from 'axios';

const BotaoAdicionar = ({ produto }) => {
  const adicionar = async () => {
   
    try {
      await axios.post('http://localhost:3001/carrinho',{
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1,
      imagem: produto.imagem,
      });
      alert(`${produto.nome} adicionado ao carrinho`);
    } catch (error) {
      console.error('Erro ao adicionar:', error);
    }
  };

  return <button onClick={adicionar}>🛒 Adicionar</button>;
};
export default BotaoAdicionar;