import Product from "./Product"

export default function ProductList (props) {
  return (
    <ul>
      <Product product={props.product} />
    </ul>
  )
}