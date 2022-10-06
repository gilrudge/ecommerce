const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'})
// mongoose.connect(`mongodb+srv://teste:1234@testeprodutos.7tqgynq.mongodb.net/?retryWrites=true&w=majority`);

// `mongodb+srv://gil:1234@cluster0.ns5gjl8.mongodb.net/?retryWrites=true&w=majority`
// mongodb://gil:1234@localhost:27017/mongoGil

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}
main();

const produtosSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qtt: Number
});

const produtos = mongoose.model('Produtos', produtosSchema);

module.exports = produtos