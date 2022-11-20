import Main from "./component/Main"
import { useState } from 'react'
import { CreditCardContext, inputValue } from "./Context/CreditCardContext";
import { CartContextProvider } from "./Context/CartContext";





export default function App() {
  
  
  const [value, setValue] = useState(inputValue)
  

  return (
    <CreditCardContext.Provider value={{value, setValue}}>
      <CartContextProvider>
        <Main />
      </CartContextProvider>
    </CreditCardContext.Provider>
    
  );
}