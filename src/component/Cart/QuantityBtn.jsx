import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { ReactComponent as Minus } from "../icons/minus.svg"
import { ReactComponent as Plus } from "../icons/plus.svg"

export default function QuantityBtn({index}) {
  const {cartItems, setCartItems}=useContext(CartContext)
  const cartItem = cartItems[index]
  
  function handleDecrease() {
    if(cartItem.quantity > 1) { //購物車內商品數量，大於1件；塞進新陣列，重新渲染
      const newCartItem = {
        ...cartItem,
        quantity: cartItem.quantity - 1
      }
      const nextCartItems = [...cartItems]
      nextCartItems[index] = newCartItem
      setCartItems(nextCartItems)
    } else { //購物車內商品數量等於1件時，移除購物車內商品資料
      cartItems.splice(index, 1) //移除陣列中，index位置的物件
      const nextCartItems = [...cartItems]
      setCartItems(nextCartItems)
    }
  }

  function handleIncrease() {
    const newCartItem = {
        ...cartItem,
        quantity: cartItem.quantity + 1
      }
      const nextCartItems = [...cartItems]
      nextCartItems[index] = newCartItem
      setCartItems(nextCartItems)
  }

  return (
    <>
      <div className="product-control">
        <Minus onClick={handleDecrease}/>
        <span className="product-count">{cartItem.quantity}</span>
        <Plus onClick={handleIncrease}/>
      </div> 
    </>
  )
}

// const {cartItems, setCartItems} = useContext(CartContext)
//   //購物車內有沒有該產品?
//   let productIndexInCart = cartItems.findIndex((element) => {
//     return element.id === productInfo.id
//   })
//   //findIndex
//   //如果在購物車內找到該件產品 => 返回index位置
//   //該件產品沒有被加入購物車 => 返回 -1

//   let [numInCart, setNumInCart] = useState(
//     (productIndexInCart === -1 ) ? 0 : cartItems[productIndexInCart].quantity
//   )
  
//   const handleIncrease = () => {
//     if (productIndexInCart === -1) { //購物車裡沒有該品項，在cartItems Array新增一個element(Object) p.s 作業沒用到這功能
//       setCartItems(
//         [
//           {
//             id: productInfo.id,
//             name: productInfo.name,
//             img: productInfo.image,
//             price: productInfo.price,
//             quantity: 1,
//           },
//           ...cartItems]
//       )
//     }else{ //購物車裡有該品項，quantity +1
//       let newCartArray = [...cartItems]
//       newCartArray[productIndexInCart].quantity++
//       setCartItems(newCartArray)
//     }
//     setNumInCart(numInCart + 1 )
//   }

//   const handleDecrease = () => {

//     if (cartItems[productIndexInCart].quantity === 1){ //如果購物車內只剩一件，remove object
//       let newCartArray = [...cartItems]
//       newCartArray.splice(productIndexInCart, 1)
//       setCartItems(newCartArray)
//     } else { //購物車內多於一件，quantity-1
//       let newCartArray = [...cartItems]
//       newCartArray[productIndexInCart].quantity++
//       setCartItems(newCartArray)
//     }
//     setNumInCart(numInCart - 1 )
//   }