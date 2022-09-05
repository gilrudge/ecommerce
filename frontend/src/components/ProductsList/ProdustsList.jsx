import { useState, useEffect } from "react";
import axios from 'axios';
import { TableTitle, TableContainer, TableHeaderRow } from "./ProductsListStyles";


export default function ProductsList(){

  const [list, setList] = useState([]);

  async function deleteItem(itemId){
    await axios.delete(`http://localhost:3000/produtos/${itemId}`)
  }
    
  async function fetchItens(){
      const dbList = await axios.get('http://localhost:3000/produtos')
      
      setList(dbList.data)
    };
  
    useEffect(() => {
      fetchItens()
            
    }, []);
  
    return (
      <TableContainer className="table">
        <TableTitle>Produtos</TableTitle>        
        <table>        
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {list.map(item =>{
              return(
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.qtt}</td>
                  <td><button onClick={()=>{deleteItem(item._id)}}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableContainer>
    )
}
