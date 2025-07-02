import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import chalk from 'chalk';

const Produto = sequelize.define('Produto', {
  nome: DataTypes.STRING,
  categoria: DataTypes.STRING,
  preco: DataTypes.FLOAT,
  imagem: DataTypes.STRING,
});

console.log(chalk.bgRedBright`Models Produtos Funcionando`)

export default Produto;