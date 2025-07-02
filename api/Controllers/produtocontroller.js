import Produto from '../Models/produto.js';
import chalk from 'chalk'


// export async function listarTodos(req, res) {
//     const produtos = await Produto.findAll();
//     res.json(produtos);
//   }

  export const listarProduto = async (req, res) => {
  try {
    const { categoria } = req.query;

    const produtos = categoria
      ? await Produto.findAll({ where: { categoria } })
      : await Produto.findAll();

    res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ erro: 'Erro ao buscar produtos.' });
  }
};
  
  // export async function listarPorCategoria(req, res) {
  //   const { categoria } = req.params;
  //   const produtos = await Produto.findAll({ where: { categoria } });
  //   res.json(produtos);
  // }
  
  export async function criar(req, res) {
    const novoProduto = await Produto.create(req.body);
    res.json(novoProduto);
  }
  
  export async function atualizar(req, res) {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (produto) {
      await produto.update(req.body);
      res.json(produto);
    } else {
      res.status(404).json({ erro: 'Produto não encontrado' });
    }
  }
  
  export async function excluir(req, res) {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (produto) {
      await produto.destroy();
      res.json({ mensagem: 'Produto excluído' });
    } else {
      res.status(404).json({ erro: 'Produto não encontrado' });
    }
  }

  console.log(chalk.bgYellowBright`Controlador Produto Funcionando`)