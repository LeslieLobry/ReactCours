import { useState } from 'react'
import ProductList from "./Components/ProductList"
import ProductItem from './Components/ProductItem'
import './App.css'
import AddProduct from './Components/AddProduct'

function App() {
 

  return (
    <>
      <ProductList />
      <AddProduct />
    </>
  )
}

export default App
