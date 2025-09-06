import { For, createSignal } from "solid-js"

function Menu(props) {
  const [visibility, setVisibility] = createSignal(false)
  const toggleMenu = () => setVisibility(!visibility())

  return (
    <nav class="navbar mb-6 mt-2">
      <div class="navbar-brand">
        <a href="/" className="navbar-item logo-link">
          <span class="title has-text-dark">Simple Cart</span>
        </a>

        <a
          role="button"
          class="navbar-burger"
          data-target="menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        classList={{ "is-active": visibility() }}
        id="menu"
      >
        <div class="navbar-start">
          <For each={props.menu}>
            {(link) => (
              <a class="navbar-item link" onClick={toggleMenu} href={link.url}>
                {link.text}
              </a>
            )}
          </For>
        </div>
      </div>
    </nav>
  )
}

export default Menu
