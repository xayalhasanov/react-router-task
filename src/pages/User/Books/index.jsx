import React from 'react'
import { useContext } from 'react'
import { productContext } from '../../../context/ProductContext'
import Product from '../../../components/User/Product'
function Books() {

  let { products } = useContext(productContext)

  return (

    
    < Product  products={products} />
  )    
}

export default Books