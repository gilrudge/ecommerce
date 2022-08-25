const express = require('express');
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://teste:1234@testeprodutos.7tqgynq.mongodb.net/?retryWrites=true&w=majority`);


const app = express();
app.use(express.json());


const produtosSchema = new mongoose.Schema({
  name: String,
  preco: Number,
  qtd: Number
});

const produtos = mongoose.model('Produtos', produtosSchema);

const status = 200;

// let produtos = [
//   {id: 1, nome: "Arroz",preco: 25 ,qtd: 100},
//   {id: 2, nome: "Feijao",preco: 15 ,qtd: 100},
//   {id: 3, nome: "Carne",preco: 50 ,qtd: 100},
//   {id: 4, nome: "Frango",preco: 15 ,qtd: 100},
//   {id: 5, nome: "Peixe",preco: 20 ,qtd: 100}
// ];

app.get('/produtos/', (req, res) => {
 res
    .status(status)
    .json(produtos);
});

app.post('/produtos', (req, res) => {
  const item = req.body

  console.log(item);
  produtos.push(item);
  res.send(produtos);

});

app.put('/produtos/', (req, res) => {
  // const id = req.params.id
  const item = req.body;
  const batata = item.map(item => item);
  res.send(batata)

});

app.delete('/', (req, res) => {

});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

