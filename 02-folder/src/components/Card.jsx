import React from 'react'

const Card = () =>{
  return (
    <div className='full'>
      <div className='header'>
        <img src="https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg" alt="" />
      </div>
      <div className='main'>
        <h1>SAURABH RAJPUT</h1>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
      </div>
      <div className='footer'>
        <button className='butt'>
          View Profile
        </button>
      </div>
      
    </div> 
  )
}

export default Card