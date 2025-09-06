import Header from "./components/Header"

function App(props) {
  return (
    <>
      <div class="container">
        <Header />
        {props.children}
      </div>
    </>
  )
}

export default App
