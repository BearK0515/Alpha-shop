import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import "../Style/Cart.modules.scss"
import CartList from "./CartList"


//方法一
// const listItems = cartItems.map(item =>
//   <div className="product-container col col-12" key={item.id} data-count="0" data-price="3999">
//     <img className="img-container" src={item.img} alt=""/>
//     <div className="product-info">
//       <div className="product-name">{item.name}</div>
//       <div className="product-control-container">
//         <div className="product-control">
//           <Minus className="minus"/>
//           <span className="product-count">{item.quantity}</span>
//           <Plus className="plus"/>
//         </div>
//       </div>
//       <div className="product-price">{item.price}</div>
//     </div>
//   </div>
// )
//方法二
// function ProductContainer({item}) {
//   return(
//     <div className="product-container col col-12" key={item.id} data-count="0" data-price="3999">
//       <img className="img-container" src={item.img} alt=""/>
//       <div className="product-info">
//         <div className="product-name">{item.name}</div>
//         <div className="product-control-container">
//           <div className="product-control">
//             <Minus className="minus" />
//             <span className="product-count">{item.quantity}</span>
//             <Plus className="plus"/>
//           </div>
//         </div>
//         <div className="product-price">{item.price}</div>
//       </div>
//     </div>
//   )    
// }

// function ProductList() {
//   return (
//     <>
//       {cartItems.map(cartItem =>
//         <ProductContainer item={cartItem} key={cartItem.id}/>
//       )}
//     </>
//   )
// }

export default function Cart () {

  const {total}=useContext(CartContext)
  
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <CartList/>
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${total()}</div>
      </section>
    </section>
  )
}