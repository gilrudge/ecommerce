import { useState, useEffect } from 'react'
import axios from 'axios';
import ProductsList from './components/ProductsList/produstsList';
import ProductButton from './components/ProductButton/ProductButton';
import AddProduct from './components/AddProduct/AddProduct';
import AddProductButton from './components/AddProductButton/AddProductButton';
import {AppContainer, Title} from './AppStyles'
import './App.css'

function App() {

  return (
    <div className="App">
      <Title>Front Mercado</Title>
      <AppContainer>
        <ProductButton/>
        <AddProductButton/>
      </AppContainer>
    </div>
  )
}

export default App
