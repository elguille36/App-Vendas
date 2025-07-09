import React from 'react';
import BotaoAdicionar from './botaoAdicionar';

const CardProduto = ({ produto }) => {
  return (
    <div style={{
      border: '1px solid #FFC8DD',
      borderRadius: 10,
      padding: 20,
      width: 180,
      textAlign: 'center',
      margin:'15px 2px 15px 5px',
    }}>
      <img src={`http://localhost:3000/${produto.imagem}`}  alt={produto.nome} style={{ width: '100%', height: 120 }} />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <BotaoAdicionar produto={produto} />
    </div>
  );
};
export default CardProduto;