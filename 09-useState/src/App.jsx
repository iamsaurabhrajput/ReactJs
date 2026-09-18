import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function jump5Num() {
    setNum(num+5)
  }
  function decreseby5Num() {
    setNum(num-5)
  }

  return (
    <div>
      <div className='main'><h1 >{num}</h1></div>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>Increas by 5</button>
      <button onClick={decreseby5Num}>Decrease by 5</button>
    </div>
  )
}

export default App