import React, { useState, useCallback } from 'react'

const App = () => {
 
 
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
 
    const incrementCounter = useCallback(() => {
    setCount(count + 1)
    }, [count])
    const decrementCounter = useCallback(() => {
    setCount(count - 1)
    }, [count])
    const incrementNumber = useCallback(() => {
    setNumber(number + 1)
    }, [number])
   


  return (
    <div>
      Count: {count}
      <button onClick={incrementCounter}>
         Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <button onClick={incrementNumber}>
         increase number
      </button>
    </div>
  )
}
 
 
export default App;