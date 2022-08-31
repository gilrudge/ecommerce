const produtos = require('../database/database');

async function postProductsCtrl(req, res){
  const item = req.body

  const itemBatata = new produtos({ name: item.name, price: item.price, qtt: item.qtt });

  await itemBatata.save();

  res.send(itemBatata);
}


module.exports = postProductsCtrl