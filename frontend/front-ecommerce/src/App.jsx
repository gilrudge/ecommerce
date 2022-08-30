import { useState, useEffect } from 'react'
import axios from 'axios';
import ProductsList from './components/ProductsList/produstsList';
import ProductButton from './components/ProductButton/ProductButton';
import AddProduct from './components/AddProduct/AddProduct';
import AddProductButton from './components/AddProductButton/AddProductButton';
import {AppContainer} from './AppStyles'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Front Mercado</h1>
      <div>
        <ProductButton/>
        <AddProductButton/>
      </div>
    </div>
  )
}

export default App
