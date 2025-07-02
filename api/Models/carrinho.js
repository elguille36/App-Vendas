import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Produto from './produto.js';
import chalk from 'chalk';

const Carrinho = sequelize.define('Carrinho', {
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produto,
      key: 'id'
    }
  },
  quantidade: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  tableName: 'carrinho',
  timestamps: false
});

Carrinho.belongsTo(Produto, { foreignKey: 'produtoId' });

console.log(chalk.bgCyanBright('Modelo Carrinho funcionando!'));

export default Carrinho;
