import { useState, useEffect } from "react";
import AddProduct from "../AddProduct/AddProduct";



export default function AddProductButton(){

  const [showForm, setShowForm] = useState(false);

  function newProduct(){
    showForm === true ? setShowForm(false) : setShowForm(true)
    
  }

  return(
    <>
    <h2>Clique para criar novo produto</h2>
    <button onClick={() => {newProduct()}}>Criar novo produto</button>
    {showForm === true ? <AddProduct/> : null}
    
    </>
  )

}