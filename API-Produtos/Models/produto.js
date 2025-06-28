import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Produto = sequelize.define('Produto', {
  nome: DataTypes.STRING,
  categoria: DataTypes.STRING,
  preco: DataTypes.FLOAT,
  imagem: DataTypes.STRING,
});

export default Produto;