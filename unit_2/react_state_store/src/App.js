import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import ProductList from './components/ProductList';
import products from './data';
import Cart from './components/Cart';

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <h1> Hi There! </h1>
      <div className="container">
        <ProductList products={products} setCart={setCart} cart={cart}/>

        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
