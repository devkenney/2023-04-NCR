import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import { createContext, useReducer, useState } from 'react';
import Counter from './components/Counter';
import CounterContext from './context';
import IsEven from './components/IsEven'
import ChildExample from './components/ChildExample';
import Modal from './components/Modal';

function App() {

  const [modalState, setModalState] = useState("disabled")

  // The following is the reducer function which we will be using inside of our useReducer hook. This is the function that will be run when changing state
  const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
      case "add":
        return state + 1
      case "subtract":
        return state - 1
      default:
        return state
    }
  }



  const initialState = 0

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      <Header />
      <Player whichPlayer='X' />
      <Player whichPlayer='O' />
      <Board />
      <CounterContext.Provider
        value={{ state, dispatch }}
      >
        <Counter />
      </CounterContext.Provider>

      <IsEven number={3} />

      <ChildExample><h1>Hello World!</h1></ChildExample>

      <button onClick={() => {
        setModalState("enabled")
      }}>Open Modal!</button>

      <Modal modalState={modalState} setModalState={setModalState} />

    </div>
  );
}

export default App;
