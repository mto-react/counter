import { useState } from 'react'

export default function Counter({start = 0, step = 1}) {
    const [count, setCount] = useState(start)

    return (
        <div className="">
            <h1>{count}</h1>
            <button onClick={() => setCount(count - step)}> - </button>
            <button onClick={() => setCount(count + step)}> + </button>
        </div>
    )
}