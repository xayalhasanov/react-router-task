import  { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export let basketContext=createContext()

function BasketProvider({children}) {

    let localBasket= JSON.parse(localStorage.getItem("basket"))
    let [basket,setBasket]=useState(localBasket ? localBasket : [])


    useEffect(()=>{
        localStorage.setItem("basket",JSON.stringify(basket))
    },[basket])
    
    
    let values={
        basket,
        setBasket
    }
  return (
    <basketContext.Provider value={values}>
      {children}
    </basketContext.Provider>
  )
}

export default BasketProvider