import { createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"

const CartContext = createContext()

function CartContextProvider(props) {
  const [items, setItem] = createStore([])

  return (
    <CartContext.Provider value={{ items, setItem }}>
      {props.children}
    </CartContext.Provider>
  )
}

export function usingCartContext() {
  return useContext(CartContext)
}

export default CartContextProvider
