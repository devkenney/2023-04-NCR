import { useState } from 'react';

export default function Product (props) {
  const [inShoppingCart, setInShoppingCart] = useState(false)

  const toggleCart = () => {
    if (inShoppingCart) {
      setInShoppingCart(false)
      let temp = props.cart;
      temp = temp.filter(item => item !== props.product.name);
      props.setCart(temp);

    } else {
      setInShoppingCart(true)
      props.setCart([...props.cart, props.product.name]);
    }
  }

  return (
    <li className={inShoppingCart ? "in-cart" : ""}>
      <span>{props.product.name}</span>
      <span>${props.product.price}</span>
      {inShoppingCart ?
        <span>It is in your shopping cart!</span> :
        <span>It is not in your shopping cart!</span>
      }
      <button onClick={toggleCart}>{inShoppingCart ?
        <span>Remove from your cart!</span> :
        <span>Add to your cart!</span>
      }</button>
    </li>
  )
}