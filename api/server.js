import express from 'express';
import cors from 'cors';
import sequelize from './database.js';
import produtoRoutes from './Routes/produtos.js';
import Produto from './Models/produto.js';
import Carrinho from './Models/carrinho.js';
import carrinhoRoutes from './Routes/carrinho.js';
import chalk from 'chalk';
import usuarioRoutes from './Routes/usuario.js';






const app = express();
app.use(cors());
app.use(express.json());

app.use('/', produtoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/', carrinhoRoutes);
app.use('/public', express.static('public'));


//sincroniza as duas tabela no banco de dados
sequelize.sync().then(() => {
app.listen(3001, () => console.log(chalk.bgGreen`APi sincronizado com banco de dados na porta 3001`));
});

