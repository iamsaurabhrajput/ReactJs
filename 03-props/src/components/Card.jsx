import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div className='card'>
     <img src={props.img} alt="" />
      <h1 className='ht'>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='but'>
        <button className='butt'> {props.color} View Profile</button>
      </div>
      
    </div>
  )
}

export default Card
