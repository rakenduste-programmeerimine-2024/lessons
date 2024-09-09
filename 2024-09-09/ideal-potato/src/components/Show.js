import React from "react"

const Show = ({ show, toggleShow }) => {
  return (
    <>
      <h1>Show</h1>
      {show ? <p>Showing</p> : <p>Not showing</p>}
      {show && <p>Showing again</p>}
      <button onClick={toggleShow}>Toggle show</button>
    </>
  )
}

export default Show
