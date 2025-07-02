import React , { useEffect, useState} from 'react';
import axios from 'axios';

const Carrinho = () => {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
  carregar();
}, []);

const carregar = async () => {
  try {
    const res = await axios.get('http://localhost:3001/carrinho');
    setItens(res.data);
  } catch (error) {
    console.error('Erro ao carregar carrinho:', error);
  } finally {
    setLoading(false);
  }
};

console.log("Carregando carrinho...");

  useEffect(() => {
    carregar();
  }, []);

  const remover = async (id) => {
    await axios.delete(`http://localhost:3001/carrinho/${id}`);
    carregar();
  };

  const limpar = async () => {
    await axios.delete('http://localhost:3001/carrinho');
    carregar();
  };

  const total = itens.reduce((t, i) => t + i.preco * i.quantidade, 0);

  return (
    <div style={{ display:'flex', padding: '0.1rem'}}>
      <h2 style={{fontSize:"1.8rem", marginRight:'2rem', marginBottom:'1rem',height:'auto'}}>🛒</h2>
      {loading ? (
      <p>Carregando...</p>
      ) : itens.length === 0 ? (
        <p style={{fontSize:'1rem'}}>Carrinho vazio</p>
      ) : (
        <>
          <ul>
            {itens.map(i => (
              <li key={i.id}>
                {i.nome} — {i.quantidade} x R$ {i.preco} 
                <button onClick={() => remover(i.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <h3>total = R$ {total} </h3>
          <button onClick={limpar}>🧹 Limpar Carrinho</button>
        </>
      )}
    </div>
  );
};

export default Carrinho;