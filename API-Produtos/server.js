import express from 'express';
import cors from 'cors';
import sequelize from './database.js';
import produtoRoutes from './Routes/produtos.js';
import Produto from './Models/produto.js';
import chalk from 'chalk';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/produto', produtoRoutes);

sequelize.sync().then(() => {
app.listen(3001, () => console.log(chalk.bgGreen`APi sincronizado com banco de dados na porta 3001`));
});