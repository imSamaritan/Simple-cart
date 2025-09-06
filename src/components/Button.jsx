function Button(props) {
   return (
      <a {...props}>
         {props.children}
      </a>
   )
}

export default Button