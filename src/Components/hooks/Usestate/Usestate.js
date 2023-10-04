import React, { useState } from 'react'
import "./Usestate.css"

const Usestate = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1)
    }

    const decrementCount = () => {
        setCount(count-1)
    }
  return (
      <>
          <h2>This is a useState hooks example</h2>
          <button onClick={incrementCount}>ADDITION</button>
          <span>{count}</span>
          <button onClick={decrementCount}>SUBSTRATION</button>
      </>
  )
}

export default Usestate