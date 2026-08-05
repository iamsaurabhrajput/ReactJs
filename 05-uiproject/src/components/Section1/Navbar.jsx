import React from 'react'

const Navbar = () => {
  return (
    <div className='gap-4 bg-white flex rounded-t-2xl flex justify-end items-center p-4 '>
    <spam className=''>Home</spam>
    <spam>Contributes</spam>
    <spam>Destination</spam>
    <spam>Blog</spam>
    <button className='bg-cyan-300 rounded-l hover:scale-110 p-4  transition-transform duration-300' >Sign up</button>
    </div>
  )
}

export default Navbar
