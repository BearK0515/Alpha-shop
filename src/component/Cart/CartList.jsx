import {ReactComponent as Plus} from "../icons/plus.svg"
import {ReactComponent as Minus} from "../icons/minus.svg"

export default function CartList({products, setProducts}) {
  
  function handleDecreaseClick(productId){
    let ProductData = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }else{
        return product;
      }
    })
    ProductData = ProductData.filter(p =>
      p.quantity > 0
    );
    setProducts(ProductData)
  }

  function handleIncreaseClick(productId){
    let ProductData = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      }else{
        return product;
      }
    })
    setProducts(ProductData)
  }
    return (
      <>
        {products.map(item => 
          <div className="product-container col col-12" key={item.id} >
            <img className="img-container" src={item.img} alt=""/>
            <div className="product-info">
              <div class="product-name">{item.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <Minus onClick={() => {
                    handleDecreaseClick(item.id)
                  }}/>
                  <span className="product-count">{item.quantity}</span>
                  <Plus onClick={() => {
                    handleIncreaseClick(item.id)
                  }}/>
                </div>
              </div>
              <div class="product-price">${item.price}</div>
            </div>
          </div>
        )}
      </>
    )
  }