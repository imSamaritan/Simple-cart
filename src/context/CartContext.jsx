import { createContext, useContext, createMemo } from "solid-js"
import { createStore } from "solid-js/store"

const CartContext = createContext()

function CartContextProvider(props) {
  const [items, setItem] = createStore([])
  
  let total = createMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0)
  })

  const addToCart = (id, product) => {
    let item = items.find((product) => product.id === id)

    if (item === undefined) {
      item = {
        id: product.id,
        title: product.title,
        quantity: 1,
        price: product.price,
        img: product.img,
      }
      setItem([item, ...items])
    } else {
      setItem(
        (product) => product.id === id,
        "quantity",
        (q) => (q += 1)
      )
    }
  }

  const removeCartItem = (id) => {
    let item = items.find((product) => product.id === id)

    if (item.quantity > 1) {
      setItem((product) => product.id === id, "quantity", (q) => q -= 1)
    }
    else {
      setItem(items.filter((item) => item.id != id))
    }
  }

  return (
    <CartContext.Provider value={{ items, setItem, total, addToCart, removeCartItem }}>
      {props.children}
    </CartContext.Provider>
  )
}

export function usingCartContext() {
  return useContext(CartContext)
}

export default CartContextProvider
