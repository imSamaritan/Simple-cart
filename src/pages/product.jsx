import { useParams } from "@solidjs/router"
import { usingCartContext } from "../context/CartContext"
import { createResource, Show } from "solid-js"
import Card from "../components/Card"
import Button from "../components/Button"

const getProduct = async (id) => {
  const request = await fetch(`http://localhost:4500/products/${id}`)
  const product = await request.json()

  return product
}

function Product() {
  const { id } = useParams()
  const [product] = createResource(id, getProduct)
  const { items, setItem } = usingCartContext()
  
  const addToCart = (id) => {
    let item = items.find((product) => product.id === id)

    if (item === undefined) {
      item = {
        id: product().id,
        title: product().title,
        quantity: 1,
        price: product().price,
        img: product().img,
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

  return (
    <div class="px-3">
      <Show when={!product.loading} fallback={console.log("loading...")}>
        <Card>
          <div class="columns">
            <div class="column">
              <img src={product().img} alt="" />
            </div>
            <div class="column">
              <p className="title has-text-dark pb-1">{product().title}</p>
              <p>{product().description}</p>
              <p class="my-3 title is-size-1 has-text-dark">
                R{((product().price + product().price) * 1.9).toFixed(2)}
              </p>
              <p class="mt-3">
                <Button
                  class="has-text-dark has-background-warning button"
                  onClick={() => addToCart(product().id)}
                >
                  Buy Now
                </Button>
              </p>
            </div>
          </div>
        </Card>
      </Show>
    </div>
  )
}

export default Product
