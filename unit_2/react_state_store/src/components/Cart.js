import CartItem from "./CartItem"

export default function Cart (props) {
  return (
    <div>
      <h2>Cart</h2>
    <ul>
      {props.cart.map(product => {
        return (
          <CartItem product={product} />
        )
      })}
    </ul>
    </div>
  )
}