const mongoose = require('mongoose');
// mongoose.connect(`mongodb+srv://teste:1234@testeprodutos.7tqgynq.mongodb.net/?retryWrites=true&w=majority`);

async function main() {
  await mongoose.connect(`mongodb+srv://teste:1234@testeprodutos.7tqgynq.mongodb.net/?retryWrites=true&w=majority`);
}
main();

const produtosSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qtt: Number
});

const produtos = mongoose.model('Produtos', produtosSchema);

module.exports = produtos