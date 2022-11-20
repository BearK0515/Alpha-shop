import { useState } from "react";
import { createContext } from "react";
import { cartData } from "../component/Cart/CartData";


const CartContext = createContext()

function CartContextProvider({children}) {
  const [currentStep, setCurrentStep] = useState(1)
  const [cartItems, setCartItems] = useState(cartData)
  const total = () => {
    let totalPrice = 0
    cartItems.forEach( item => {
      totalPrice += item.price * item.quantity
    })
    return totalPrice
  }
  
  return(
    <CartContext.Provider value={{currentStep, setCurrentStep, cartItems, setCartItems, total}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext, CartContextProvider}