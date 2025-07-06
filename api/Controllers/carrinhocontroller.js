import Carrinho from "../Models/carrinho.js";
import Produto from '../Models/produto.js';
import chalk from 'chalk';



export const adicionarItem = async (req, res) => {
  const { nome, preco, quantidade, imagem} = req.body;

  try {
    const itemExistente = await Carrinho.findOne({ where: { nome } });

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
      await itemExistente.save();
      return res.status(200).json(itemExistente);
    }

    const novoItem = await Carrinho.create({ nome, preco, quantidade,imagem });
    res.status(201).json(novoItem);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao adicionar ao carrinho' });
  }
};

export const listarCarrinho = async (req, res) => {
  try {
    const itens = await Carrinho.findAll();
    res.json(itens);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar o carrinho' });
  }
};
// Atualizar a quantidade de um item
export const atualizarItem = async (req, res) => {
  const { id } = req.params;
  const { quantidade } = req.body;

  try {
    const item = await Carrinho.findByPk(id);
    if (!item) return res.status(404).json({ erro: 'Item não encontrado' });

    item.quantidade= quantidade;
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar item' });
  }
};

// Remover item específico
export const removerItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Carrinho.findByPk(id);
    if (!item) return res.status(404).json({ erro: 'Item não encontrado' });

    await item.destroy();
    res.json({ mensagem: 'Item removido com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao remover item' });
  }
};

// Limpar o carrinho inteiro
export const limparCarrinho = async (req, res) => {
  try {
    await Carrinho.destroy({ where: {}, truncate: true});// limpa a tabela mais eficiente
    res.json({ mensagem: 'Carrinho limpo com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao limpar carrinho' });
  }

  console.log(chalk.bgGreenBright`controlador carrinho rodando`)
};
