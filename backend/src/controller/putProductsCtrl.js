const produtos = require('../database/database');

async function putProductsCtrl(req, res){

  const id = req.params.id
  const item = req.body;
  const teste = await produtos.replaceOne({ _id: id },
    {
      name: item.name,
      price: item.price,
      qtt: item.qtt
    });

  res.send({
    message: "item alterado!"
  })

}

module.exports = putProductsCtrl