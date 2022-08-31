const produtos = require('../database/database');

const status = 200;

async function getProductsCtrl(req, res){
    

    const productList = await produtos.find({});
    res
      .status(status)
      .send(productList);
  };



module.exports = getProductsCtrl