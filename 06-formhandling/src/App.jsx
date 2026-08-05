import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("hello saurbhbh!")

  }
  return (
    <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
      <input type="text" placeholder='Enter your full name. ' />
      <button>click here</button>
    </form>
    </div>
  )
}

export default App
