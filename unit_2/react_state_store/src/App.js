import './App.css';
import { useState } from 'react'
import ProductList from './components/ProductList';
import products from './data';
import Cart from './components/Cart';
import Counter from './components/Counter';

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      {/* <h1> Hi There! </h1>
      <div className="container">
        <ProductList products={products} setCart={setCart} cart={cart}/>

        <Cart cart={cart} />
      </div> */}

      <div>
        <h2>Counter stuff:</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
