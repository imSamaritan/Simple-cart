import { usingContext } from "../context/CartContext"
import { For } from "solid-js"
import Card from "../components/Card"

function Cart() {
  const { items } = usingContext()

  return (
    <Card>
      <div class="card-content">
        <For each={items}>
          {(item) => (
            <div class="columns is-gapless">
              <div class="column is-1">
                <img width="80" class="avatar" src={item.img} alt="" />
              </div>
              <div class="column is-2">
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Price: R{((item.price + item.price) * 1.9).toFixed(2) * item.quantity}
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
