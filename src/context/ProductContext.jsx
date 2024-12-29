import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export let productContext = createContext()
import axios from 'axios'

function ProductProvider({ children }) {

    let [products, setProducts] = useState([])

    useEffect(() => {
        try {
            axios.get("http://localhost:3001/books")
                .then(res => setProducts(res.data))
        } catch (err) {
            console.error("error get req", err)
        }
    }, [])

    let values = {
        products,
        setProducts
    }

    return <productContext.Provider value={values}>{children}</productContext.Provider>

}

export default ProductProvider