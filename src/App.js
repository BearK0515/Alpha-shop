import Main from "./component/Main"
import { useState } from 'react'
import { cartData } from "./component/Cart/CartData";
import { CartContext } from "./Context/CartContext"
import { CreditCardContext, inputValue } from "./Context/CreditCardContext";




export default function App() {
  
  const [currentStep, setCurrentStep] = useState(1)
  const [cartItems, setCartItems] = useState(cartData)
  const [value, setValue] = useState(inputValue)
  

  return (
    <CreditCardContext.Provider value={{value, setValue}}>
    <CartContext.Provider value={{currentStep, setCurrentStep, cartItems, setCartItems}}>
      <Main />
    </CartContext.Provider>
    </CreditCardContext.Provider>
    
  );
}