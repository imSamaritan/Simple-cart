/* @refresh reload */
import { render } from "solid-js/web"
import { Router, Route } from "@solidjs/router"

import "bulma/css/bulma.css"
import "./index.css"

import CartContextProvider from "./context/CartContext.jsx"
import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Cart from "./pages/Cart.jsx"
import Product from "./pages/product.jsx"

const root = document.getElementById("root")

render(
  () => (
    <CartContextProvider>
      <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart/:id" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Router>
    </CartContextProvider>
  ),
  root
)
