import { usingCartContext } from "../context/CartContext"
import { For } from "solid-js"
import Card from "../components/Card"
import Button from "../components/Button"

function Cart() {
  const { items, addToCart } = usingCartContext()
  const formartZAR = new Intl.NumberFormat("en-SA", {
    style: "currency",
    currency: "ZAR",
  })
  return (
    <Card>
      <div class="card-content">
        <For each={items}>
          {(item) => (
            <div class="columns is-gapless has-text-centered-mobile">
              <div class="column is-2">
                <img width="130" class="avatar" src={item.img} alt="" />
              </div>
              <div class="column is-2">
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Price:
                  {formartZAR.format(item.price * 2 * 1.9 * item.quantity)}
                </p>
                <p class="mt-2">
                  <Button class="decrease button has-text-light has-background-danger has-text-weight-bold">
                    -
                  </Button>
                  <Button class="increase button has-text-light has-background-success has-text-weight-bold" onClick={() => addToCart(item.id, item)}>
                    +
                  </Button>
                </p>
              </div>
            </div>
          )}
        </For>
      </div>
    </Card>
  )
}

export default Cart
