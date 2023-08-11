import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h3>{count}</h3>
        <button
          aria-label="Increment Value"
          onClick={() => dispatch(increment())}
        >Increment</button>
        <button
          aria-label="Decrement Value"
          onClick={() => dispatch(decrement())}
        >Decrement</button>
      </div>
    </div>
  )
}