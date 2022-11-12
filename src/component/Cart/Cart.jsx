import "../Style/Cart.modules.scss"
import CartList from "./CartList"
import {cartData} from "./CartData"
import { useState } from "react"
import {useImmer} from 'use-immer'
//方法一
// const listItems = cartItems.map(item =>
//   <div class="product-container col col-12" key={item.id} data-count="0" data-price="3999">
//     <img class="img-container" src={item.img} alt=""/>
//     <div class="product-info">
//       <div class="product-name">{item.name}</div>
//       <div class="product-control-container">
//         <div class="product-control">
//           <Minus className="minus"/>
//           <span class="product-count">{item.quantity}</span>
//           <Plus className="plus"/>
//         </div>
//       </div>
//       <div class="product-price">{item.price}</div>
//     </div>
//   </div>
// )
//方法二
// function ProductContainer({item}) {
//   return(
//     <div class="product-container col col-12" key={item.id} data-count="0" data-price="3999">
//       <img class="img-container" src={item.img} alt=""/>
//       <div class="product-info">
//         <div class="product-name">{item.name}</div>
//         <div class="product-control-container">
//           <div class="product-control">
//             <Minus className="minus" />
//             <span class="product-count">{item.quantity}</span>
//             <Plus className="plus"/>
//           </div>
//         </div>
//         <div class="product-price">{item.price}</div>
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

  const [products, setProducts] = useState(cartData)
  let totalPrice = 0
  products.forEach( data => {
    totalPrice += data.price * data.quantity
  })

  return (
    <section class="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>
      <section class="product-list col col-12" data-total-price="0">
        <CartList products={products} setProducts={setProducts}/>
      </section>
      <section class="cart-info shipping col col-12">
        <div class="text">運費</div>
        <div class="price">免費</div>
      </section>
      <section class="cart-info total col col-12">
        <div class="text">小計</div>
        <div class="price">${totalPrice}</div>
      </section>
    </section>
  )
}