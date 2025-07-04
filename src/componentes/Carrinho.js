import React, { useState, } from 'react';
import axios from 'axios';

const Carrinho = () => {
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregarCarrinho = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3001/carrinho');
      setItens(res.data);
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
    } finally {
      setLoading(false);
    }
  };

  const alternarCarrinho = () => {
    if (!mostrarCarrinho) carregarCarrinho();
    setMostrarCarrinho(!mostrarCarrinho);
  };

  const removerItem = async (id) => {
    await axios.delete(`http://localhost:3001/carrinho/${id}`);
    carregarCarrinho();
  };

  const atualizarItem= async (id, novaQtd) => {
    if (novaQtd < 1) return;
    await axios.put(`http://localhost:3001/carrinho/${id}`, {
      quantidade: novaQtd,
    });
    carregarCarrinho();
  };

  const limparCarrinho = async () => {
    await axios.delete('http://localhost:3001/carrinho');
    carregarCarrinho();
  };

  const total = itens.reduce((t, i) => t + i.preco * i.quantidade, 0);

  return (
    <div className='carrinho'>
      <button
        onClick={alternarCarrinho}
        style={{
          padding: '0.5rem 1rem',
          background: '#e26b9b',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight:'800',
          color:'#f1d5e0',
  

        }}
      >
        🛒 Carrinho
      </button>

      {mostrarCarrinho && (
        <div
          style={{
            position: 'absolute',
            top: '110%',
            right: 0,
            background: '#fff',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            padding: '1rem',
            borderRadius: '8px',
            width: '240px',
            zIndex: 999
          }}
        >
          <h3 style={{ marginBottom: '0.5rem', fontSize:'1.5rem' }}>Itens no Carrinho</h3>
          {loading ? (
            <p>Carregando...</p>
          ) : itens.length === 0 ? (
            <p>Carrinho vazio</p>
          ) : (
            <>
              <ul style={{ listStyle: 'none', padding: 0 , }}>
                {itens.map((item) => (
                  <li key={item.id} style={{marginBottom: '0.8rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
                    <strong style={{fontSize:'1rem'}}>{item.nome}</strong><br />
                    <div style={{display:'flex'}}>
                   <h3 style={{fontSize:'1rem'}}> R$ {item.preco.toFixed(2)} x </h3>
                    <input
                      type="number"
                      min="1"
                      value={item.quantidade}
                      onChange={(e) => atualizarItem(item.id, parseInt(e.target.value))}
                      style={{ width: '25px', marginLeft: '5px', marginRight: '5px',height:'20px',marginTop:'17px' }}
                    />
                    <h3 style={{fontSize:'1rem'}}>= R$ {(item.preco * item.quantidade).toFixed(2)}</h3>
                    </div>
                    <br />
                    <button onClick={() => removerItem(item.id)} style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
              <hr />
              <p style={{ marginTop: '0.5rem' }}><strong>Total:</strong> R$ {total.toFixed(2)}</p>
              <button
                onClick={ limparCarrinho}
                style={{
                  marginTop: '0.5rem',
                  padding: '0.4rem 0.8rem',
                  background: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                🧹 Limpar Carrinho
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrinho;