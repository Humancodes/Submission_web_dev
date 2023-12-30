import React from 'react'
import {Link} from "react-router-dom";
const IntroToNecleo = () => {
  return (
    <>
    <div className='flex items-center justify-center relative top-48 text-[80px] font-bold text-orange-500'>Intro Video to Necleo</div>
    <div className='flex items-center justify-center relative top-52 text-[20px] font-bold text-orange-500 hover:text-orange-700'><Link to="/">Click here to go to HomePage</Link></div>
    
  </>
  )
}

export default IntroToNecleo