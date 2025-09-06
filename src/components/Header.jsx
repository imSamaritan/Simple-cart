import { createSignal } from "solid-js"
import banner from "../assets/banner.png"
import Menu from "./Menu"

function Header() {
   let [cartTotalItems, setCartTotalItems] = createSignal(0)
   const menu = [
      {text: "Home", url: "/"},
      {text: "About", url: "/about"},
      {text: `Cart(${cartTotalItems()})`, url: "/cart"}
   ]
   return (
      <>
         <img src={banner} alt="banner" />
         <Menu menu={menu}/>
      </>
   )
}

export default Header