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

router.post('/produtos', (req, res) => {
  const item = req.body

  const itemBatata = new produtos({ name: item.name, price: item.price, qtt: item.qtt });

  async function saveItem() {

    await itemBatata.save(); 
    
  };
  saveItem();
  
  res.send(itemBatata);

});

router.put('/produtos/', (req, res) => {
  // const id = req.params.id
  const item = req.body;
  const batata = item.map(item => item);
  res.send(batata)

});

router.delete('/', async (req, res) => {
  

});


module.exports = router