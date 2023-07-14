import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import ProductList from './components/ProductList';
import products from './data';

function App() {

  const [cart, setCart] = useState([])
  const [submission, setSubmission] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    setCart([...cart, submission])
  }

  const handleChange = (event) => {
    setSubmission(event.target.value)
  }

  return (
    <div className="App">
      <h1> Hi There! </h1>

      <ProductList product={products[0]}/>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" />
      </form>

      <ul>
        {cart.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
