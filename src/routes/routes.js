const express = require('express');
const produtos = require('../database/database');
const router = express.Router()

const status = 200;



router.get('/produtos/', async (req, res) => {

  const productList = await produtos.find({});
  res
    .status(status)
    .send(productList);
});

router.post('/produtos', async (req, res) => {
  const item = req.body

  const itemBatata = new produtos({ name: item.name, price: item.price, qtt: item.qtt });

  await itemBatata.save();

  res.send(itemBatata);

});

router.put('/produtos/:id', async (req, res) => {
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


});

// router.patch('/produtos/:id', async (req, res) => {

//   const id = req.params.id;
//   const item = req.body;
//   const query = { _id: id };

//   await produtos.findOneAndUpdate(query, { name: item.name })

//   res.send({
//     message: "item alterado"
//   })

// });

router.delete('/produtos/:id', async (req, res) => {
  const id = req.params.id

  await produtos.deleteOne({ _id: id });

  res.send({
    message: `Item excluído`
  })


});


module.exports = router