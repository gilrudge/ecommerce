import { useState, useEffect } from "react";
import axios from 'axios';
import {FormStyles} from './AddProductStyles';

export default function AddProduct(){

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState();
  const [newQtt, setNewQtt] = useState();

  const createProduct = async (e) => {
    e.preventDefault();

   await axios.post('http://localhost:3000/produtos', 
    {
      name: newName,
      price: newPrice,
      qtt: newQtt
    })
  }

  return(
    <>
      <FormStyles onSubmit={createProduct}>
        <input value={newName} onChange={(e)=> setNewName(e.target.value)} type="text" placeholder="name"/>
        <input value={newPrice} onChange={(e)=> setNewPrice(e.target.value)} type="text" placeholder="price"/>
        <input value={newQtt} onChange={(e)=> setNewQtt(e.target.value)} type="text" placeholder="quantity"/>
        <button>Criar</button>
      </FormStyles>
    
    </>
  )
}