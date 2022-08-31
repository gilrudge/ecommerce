const produtos = require('../database/database');

async function delProductsCtrl(req, res){
  const id = req.params.id

  await produtos.deleteOne({ _id: id });

  res.send({
    message: `Item excluído`
  });
};

module.exports = delProductsCtrl