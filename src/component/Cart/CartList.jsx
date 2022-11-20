import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import QuantityBtn from "./QuantityBtn"

export default function CartList(){
const {cartItems}=useContext(CartContext)
  return (
    <>
      {cartItems.map((item,index) => 
        <div className="product-container col col-12" key={item.id} >
          <img className="img-container" src={item.img} alt=""/>
          <div className="product-info">
            <div className="product-name">{item.name}</div>
            <div className="product-control-container">
              <QuantityBtn index={index}/>
            </div>
            <div className="product-price">${item.price}</div>
          </div>
        </div>
      )}
    </>
  )

}

  