import React from 'react'
import Dot from '../assets/Dot.png'
const Experience = () => {
  return (
    <div className='bg-[#131C2F] flex justify-center items-center flex-col'>
      <h1 className='text-white text-5xl font-bold mt-10"'>Experience</h1>
<span className=' mt-10'>
            <img className='w-4' src={Dot} alt="" />
        </span>
      <div className='w-full  h-full'>
        
        <div className='w-1/2 flex flex-col border-l-2 border-gray-400 text-white items-center justify-end float-right'>
            <h1>Dhanuka Pvt Ltd</h1>
            <p>Gurgaon Haryana India</p>
            
        </div>
         <div className='w-1/2 flex flex-col text-white items-center justify-end float-right'>
            <h1>Dhanuka Pvt Ltd</h1>
            <p>Gurgaon Haryana India</p>
            
        </div>
      </div>
    </div>
  )
}

export default Experience
