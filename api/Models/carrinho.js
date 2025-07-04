import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Produto from './produto.js';
import chalk from 'chalk';

const Carrinho = sequelize.define('Carrinho', {
  nome: DataTypes.STRING,
  preco: DataTypes.FLOAT,
  quantidade: DataTypes.INTEGER,
});

Carrinho.belongsTo(Produto, { foreignKey: 'produtoId' });

console.log(chalk.bgCyanBright('Modelo Carrinho funcionando!'));

export default Carrinho;
