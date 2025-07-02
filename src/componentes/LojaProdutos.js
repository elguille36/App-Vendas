import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProduto from './cardproduto.js';

const categorias = ["alimentos", "higiene", "lar"];

function LojaProdutos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Carrega produtos da categoria selecionada
  useEffect(() => {
    if (categoriaSelecionada) {
      setLoading(true);
      axios.get(`http://localhost:3001/produto?categoria=${categoriaSelecionada}`)
        .then((response) => {
          setProdutos(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar produtos:", error);
          setLoading(false);
        });
    } else {
      setProdutos([]);
    }
  }, [categoriaSelecionada]);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Produtos por Categorias :</h1>

      {/* Acordeon */}
      <div className="space-y-2">
        {categorias.map((categoria) => (
          <div key={categoria}>
            <button
              onClick={() =>
                setCategoriaSelecionada(
                  categoriaSelecionada === categoria ? null : categoria
                )
              }
              className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {categoria}
            </button>

            {/* Se categoria ativa, mostra os cards */}
            {categoriaSelecionada === categoria && (
              <div style={{display:'flex',justifyContent:'space-around'}}>
                {loading ? (
                  <p>Carregando produtos...</p>
                ) : produtos.length === 0 ? (
                  <p>Nenhum produto encontrado.</p>
                ) : (
                  produtos.map((p) => (

                 <CardProduto key={p.id} produto={p} />
                    // <div key={produto.id} className="bg-white p-3 rounded shadow">
                    //   <h2 className="font-semibold">{produto.nome}</h2>
                    // //   <p>R$ {produto.preco}</p>
                    // </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LojaProdutos;