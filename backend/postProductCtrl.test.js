{
// const soma = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const div = (a, b) => a / b;
// const mult = (a, b) => a * b;
// const exp = (a, b) => a ** b;


// test('sum test', () => {
//   expect(soma(1,2)).toBe(3);
//   expect(soma(2,2)).toBe(4);
//   expect(soma(400,250)).toBe(650);
//   expect(soma(5,7)).toBe(12);
// });

// test('sub test', () => {
//   expect(sub(1,2)).toBe(-1);
//   expect(sub(2,2)).toBe(0);
//   expect(sub(400,250)).toBe(150);
//   expect(sub(5,7)).toBe(-2);
// });

// test('div test', () => {
//   expect(div(1,2)).toBe(0.5);
//   expect(div(2,2)).toBe(1);
//   expect(div(400,250)).toBe(1.6);
//   expect(div(10,5)).toBe(2);
// });

// test('mult test', () => {
//   expect(mult(1,2)).toBe(2);
//   expect(mult(2,2)).toBe(4);
//   expect(mult(400,250)).toBe(100000);
//   expect(mult(10,5)).toBe(50);
// });

// test('exp test', () => {
//   expect(exp(1,2)).toBe(1);
//   expect(exp(2,2)).toBe(4);
//   expect(exp(10,2)).toBe(100);
//   expect(exp(10,5)).toBe(100000);
// });
}
const mongoose = require('mongoose');
const produtos = require('./src/database/database');


const postProductsCtrl = require('./src/controller/postProductsCtrl');
const getProductsCtrl = require('./src/controller/getProductsCtrl');


beforeAll( async () => {
  await mongoose.connect(`mongodb+srv://teste:1234@testeprodutos.7tqgynq.mongodb.net/?retryWrites=true&w=majority`);

});


describe('products controllers',() => {
  it('can insert a thing', async () => {
    let jsonWasCalled = false
    const res = {
      send: () => jsonWasCalled = true
    }
    const req = {body:{name:'banana', price:10, qtt: 100}};
    const {name, price, qtt} = req.body;
    
    await postProductsCtrl(req, res);
    const response = await produtos.find({price:10});
    expect(response.length).not.toBe(0);
  });

  it('can get a thing into mongo', async () => {
    
    const req = {}
    const res = {
      send: () => jsonWasCalled = true,
      status: () => res
    }

    await getProductsCtrl(req, res)
    const response = await produtos.find({})
    expect(response.length).not.toBe(0);
  })

});

afterAll(async () => {
  await mongoose.connection.close()
})


///////////////////////////////////////////

// const { getAllProducts, createNewProduct } = require("./products");
// const { connect, disconnect } = require("../database");
// const ProductModel = require("../models/products.js");

// beforeAll(() => {
//   return connect();
// });

// afterAll(() => {
//   return disconnect();
// });

// describe("Product Service", () => {
//   it("should be able to get a products list", async () => {
//     const promise = getAllProducts();
//     expect(promise).toBeInstanceOf(Promise);
//     await expect(promise).resolves.toBeInstanceOf(Array);
//   });
//   it("should be able to save a new product", async () => {
//     createNewProduct("Test", 0);
//     const response = await ProductModel.find({ title: "Test" });
//     await expect(response.length).not.toBe(0);
//   });
// });







