import { useState, useEffect } from "react";
import axios from 'axios';


export default function ProductsList(){

  const [list, setList] = useState([]);
    
   async function fetchItens(){
      const dbList = await axios.get('http://localhost:3000/produtos')
      
      setList(dbList.data)
    };
  
    useEffect(() => {
      console.log(fetchItens())
    }, []);
  
    const renderItems = list.map(item => {
  
      return(
        <>
          <div key={item._id}>
            <h3>Name: {item.name}</h3>
            <p>ID:{item._id}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.qtt}</p>
          </div>
        </>
      )
    })
  
    return (
      <>
        <h1>Produtos</h1>
        {renderItems}
      </>
    )
}
