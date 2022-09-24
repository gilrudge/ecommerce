const express = require('express');
const router = express.Router();

const postProductsCtrl = require('../controller/postProductsCtrl');
const getProductsCtrl = require('../controller/getProductsCtrl');
const putProductsCtrl = require('../controller/putProductsCtrl');
const delProductsCtrl = require('../controller/delProductsCtrl');

// router.post('/produtos', async (req, res) => {
//   const item = req.body

//   const itemBatata = new produtos({ name: item.name, price: item.price, qtt: item.qtt });

//   await itemBatata.save();

//   res.send(itemBatata);

// });
router.post('/produtos/', postProductsCtrl);

// router.get('/produtos/', async (req, res) => {

//   const productList = await produtos.find({});
//   res
//     .status(status)
//     .send(productList);
// });
router.get('/produtos/',getProductsCtrl);

// router.put('/produtos/:id', async (req, res) => {
//   const id = req.params.id
//   const item = req.body;
//   const teste = await produtos.replaceOne({ _id: id },
//     {
//       name: item.name,
//       price: item.price,
//       qtt: item.qtt
//     });

//   res.send({
//     message: "item alterado!"
//   })
// });
router.put('/produtos/:id', putProductsCtrl);

// router.delete('/produtos/:id', async (req, res) => {
//   const id = req.params.id

//   await produtos.deleteOne({ _id: id });

//   res.send({
//     message: `Item excluído`
//   })
// });
router.delete('/produtos/:id', delProductsCtrl)

module.exports = router