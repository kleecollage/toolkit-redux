import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {
  
  
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const param = 15;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>count is { counter }</p>
      <div className="card">
        <button onClick={() => dispatch(increment()) }>
          Increment
        </button>
        <button onClick={() => dispatch(decrement()) }>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(param)) }>
          Increment by ({param})
        </button>
      </div>
    </>
  )
}

export default App
