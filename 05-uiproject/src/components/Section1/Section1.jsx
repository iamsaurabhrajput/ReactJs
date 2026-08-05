import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import river from "../../assets/river.jpg";
import Footer from './Footer';
const Section1 = () => {
  return ( <div className='m-8'>
    <div className='rounded-2xl h-[calc(100vh-64px)] bg-no-repeatw-screen bg-center bg-cover  '
    style={{
      backgroundImage: `url(${river})`,

    }}>
       <Navbar />
       <MainContent />
       <Footer />
    </div>
    </div>
  )
}

export default Section1
