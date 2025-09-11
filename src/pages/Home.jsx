import api from "../http/http-client.js"
import { createResource, Show, For } from "solid-js"
import Card from "../components/Card.jsx"
import Button from "../components/Button.jsx"

function Home() {
  const [data] = createResource("/products", api.getProducts)
  
  return (
    <Show when={data.loading === false} fallback={<p>Loading...</p>}>
      <div class="columns is-multiline  px-3">
        <For each={data()}>
          {(product) => (
            <div class="column is-4-desktop is-6-tablet">
              <Card>
                <div class="card-image">
                  <img src={product.img} alt="" />
                </div>
                <div class="card-content">
                  <p class="sub-title has-text-weight-bold">{product.title}</p>
                  <p>{product.description.slice(0, 100)}...</p>
                  <Button href={`/product/${product.id}`} class="button has-background-warning mt-3">Read More...</Button>
                </div>
              </Card>
            </div>
          )}
        </For>
      </div>
    </Show>
  )
}

export default Home
