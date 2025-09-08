import { createContext, useContext, createMemo } from "solid-js"
import { createStore } from "solid-js/store"

const CartContext = createContext()

function CartContextProvider(props) {
  const [items, setItem] = createStore([])
  let total = createMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0)
  })

  return (
    <CartContext.Provider value={{ items, setItem, total }}>
      {props.children}
    </CartContext.Provider>
  )
}

export function usingCartContext() {
  return useContext(CartContext)
}

export default CartContextProvider
