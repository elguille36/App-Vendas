import sequelize from './database.js';
import Produto from './Models/produto.js';
import Carrinho from './Models/carrinho.js'
import chalk from 'chalk';

await sequelize.sync({ force: true });//estava em true
await Carrinho.sync(); 

await Produto.bulkCreate([
  // Alimentos
  { nome: 'Harina Pan', categoria: 'alimentos', preco: 18.90, imagem: '/public/img/logo.png' },
  { nome: 'Atum', categoria: 'alimentos', preco: 9.50, imagem: '/public/img/atum.png' },
  { nome: 'Harina Cachapas', categoria: 'alimentos', preco: 15.90, imagem: '/public/img/cachapas.png' },
  { nome: 'Cerelac', categoria: 'alimentos', preco: 21.90, imagem: '/public/img/cerelac.png' },
  { nome: 'Diablitos', categoria: 'alimentos', preco: 7.90, imagem: '/public/img/diablitos.png' },
  { nome: 'Flips', categoria: 'alimentos', preco: 18.90, imagem: '/public/img/flips.png' },
  { nome: 'Pirulin', categoria: 'alimentos', preco: 13.90, imagem: '/public/img/pirulin.png' },
  { nome: 'Rikesa', categoria: 'alimentos', preco: 8.90, imagem: '/public/img/rikesa.png' },

  // Higiene
  { nome: 'Desodorante Secret', categoria: 'higiene', preco: 14.99, imagem: '/public/img/desodorante secret.png' },
  { nome: 'Desodorante Men', categoria: 'higiene', preco: 15.99, imagem: '/public/img/desodorante.png' },
   { nome: 'Papel Higienico', categoria: 'higiene', preco: 13.99, imagem: '/public/img/papel-higienico.png' },
  { nome: 'Pasta dental', categoria: 'higiene', preco: 5.99, imagem: '/public/img/pasta de dente.jpeg' },
  { nome: 'Sabão em Pó', categoria: 'higiene', preco: 18.99, imagem: '/public/img/sabão-em-pó.png' },
  { nome: 'Sabão Liquido', categoria: 'higiene', preco: 12.99, imagem: '/public/img/sabaõ liquido.png' },
   { nome: 'Desodorante Barra', categoria: 'higiene', preco: 16.99, imagem: '/public/img/images (1).png' },
  { nome: 'Desinfectante', categoria: 'higiene', preco: 9.90, imagem: '/public/img/desifectante.png' },

  // Lar
  { nome: 'Desinfectante', categoria: 'lar', preco: 9.90, imagem: '/public/img/desifectante.png' },
  { nome: 'Cloro Lavansan', categoria: 'lar', preco: 15.90, imagem: '/public/img/limpieza1.png' },
  { nome: 'Sacolas  Lixo', categoria: 'lar', preco: 10.90, imagem: '/public/img/bolsas.png' },
  { nome: 'Vassoura', categoria: 'lar', preco: 8.90, imagem: '/public/img/cepillo.png' },
  { nome: 'Luvas', categoria: 'lar', preco: 7.90, imagem: '/public/img/guantes.png' },
  { nome: 'Balde', categoria: 'lar', preco: 6.90, imagem: '/public/img/valde.png' },
  { nome: 'Chapa', categoria: 'lar', preco: 70.90, imagem: '/public/img/budare.png' },
  { nome: 'Pano de chão', categoria: 'lar', preco: 19.90, imagem: '/public/img/lampasos.png' },
]);

console.log(chalk.bgBlue`Produtos criado com sucesso`);
process.exit();