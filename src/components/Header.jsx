import { usingCartContext } from "../context/CartContext"
import { createMemo } from "solid-js"
import banner from "../assets/banner.png"
import Menu from "./Menu"

function Header() {
  const { total } = usingCartContext()

  const menu = createMemo(() => [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: `Cart(${total()})`, url: "/cart" },
  ])
  return (
    <>
      <img src={banner} alt="banner" />
      <Menu menu={menu()} />
    </>
  )
}

export default Header
