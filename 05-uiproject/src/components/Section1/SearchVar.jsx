import React from 'react'

const SearchVar = () => {
  return (
    <div className='flex bg-white w-150 rounded items-center justify-between'>
    <div className=' flex justify-around w-100 font-light'>
      <div>Ex.Amstredown,New York, Paris..... </div>
      <div>Dates</div>
    </div>
    <div className=''>
        <button className='bg-amber-600 rounded hover:scale-110 p-4  transition-transform
                     duration-300'>Search</button>
    </div>
    
    </div>
  )
}

export default SearchVar
