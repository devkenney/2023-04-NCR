import Product from "./Product"

export default function ProductList (props) {
  return (
    <div>
    <h2>Products</h2>
    <ul>
      {
        props.products.map((product) => {
          return (
            <Product product={product} setCart={props.setCart} cart={props.cart} />
          )
        })
      }
    </ul>
    </div>
  )
}