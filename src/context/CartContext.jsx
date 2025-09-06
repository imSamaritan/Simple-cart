import { createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"

const CartContext = createContext()

function CartContextProvider(props) {
  const [items, setItems] = createStore([
    {
      id: 1,
      title: "Ninja Tee, Black",
      quantity: 3,
      price: 12,
      img: "https://mockup-api.teespring.com/v3/image/2NgQ1ZAAW-l7xCRHhBDvI1B1C8U/800/800.jpg",
    },
    {
      id: 3,
      title: "Ninja Hoodie, Black",
      quantity: 2,
      price: 21,
      img: "https://mockup-api.teespring.com/v3/image/_IvBZ0jhry5FAXEOWFw3ynpo8ig/800/800.jpg",
    },
  ])

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  )
}

export function usingContext() {
  return useContext(CartContext)
}

export default CartContextProvider
