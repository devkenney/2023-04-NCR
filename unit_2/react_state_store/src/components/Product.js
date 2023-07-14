import { useState } from 'react';

export default function Product (props) {
  const [inShoppingCart, setInShoppingCart] = useState(false)

  return (
    <li>
      {props.product.name} is
      {props.product.price} and
      {inShoppingCart ?
        <span>It is in your shopping cart!</span> :
        <span>It is not in your shopping cart!</span>
      }
    </li>
  )
}