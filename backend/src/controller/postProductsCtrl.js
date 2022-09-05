const produtos = require('../database/database');

async function postProductsCtrl(req, res){
  const item = req.body

  const itemBatata = new produtos({ name: item.name, price: item.price, qtt: item.qtt });

  await itemBatata.save();

  res.send(itemBatata);
}




module.exports = postProductsCtrl



// productRouter.post("/", async (req, res) => {
//   const { title, price, quantity } = req.body
//   const newProduct = await createNewProduct(title, price, quantity)
//   res.json(newProduct)
// })

// const createNewProduct = async (title, price, quantity) => {
//   const newProduct = new ProductModel({
//     title: title,
//     price: price,
//     quantity: quantity,
//   })
//   await newProduct.save()
//   return
// };
