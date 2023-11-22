import { useState } from 'react'
import './App.css'
import Counter from './commponents/Counter'

function App() {
  // const [count, setCount] = useState(0)
  const counters = [
    {id: 0, start: 0, step: 1},
    {id: 1, start: 5, step: 5},
    {id: 2, start: 10, step: 10}
  ]

  return (
    <>
      {
        counters.map((counter) => 
          <div key={counter.id}>
            <Counter start = {counter.start} step = {counter.step}/>
          </div>
        )
      }
    </>
  )
}

export default App
