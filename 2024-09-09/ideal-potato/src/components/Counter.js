import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = React.useState(0);

  const modifyCounter = () => setCounter(prevCounter => prevCounter + 1)

  return (
    <>
      <h1>{counter}</h1>

      {[+1, +5, +50, -1, -5, -50].map(element => (
        <button onClick={modifyCounter}>sync {element}</button>
      ))}

      <button onClick={() => setTimeout(() => modifyCounter(), 2000)}>
        async +1
      </button>
    </>
  )
}

export default Counter
