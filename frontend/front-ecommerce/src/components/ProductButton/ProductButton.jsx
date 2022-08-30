import { useState } from "react";
import ProductsList from "../ProductsList/ProdustsList";


export default function ProductButton(){
 const [productList, setProductList] = useState(false)

 const showList = () =>{
  productList === false ? setProductList(true) : setProductList(false)
}

  return (

    <div>
      <h2>Clique para listar produtos</h2>
      <button onClick={()=>{showList()}}>Produtos</button>
      {productList === true ? <ProductsList/> : null}
    </div>
  )
}