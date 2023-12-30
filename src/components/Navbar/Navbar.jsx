import React from 'react';
import {ChevronDown} from "lucide-react";
const Navbar = () => {
  return (
    <div className='h-[62px] w-[100%] border-b-2 flex justify-end items-center bg-white'>
       <div className='flex justify-end'>

        <div className='mr-1 font-semibold text-[17px]'>
            Free Trail <span className='ml-9 font-bold'>|</span>
            <p className='text-[14px] text-orange-500'>Extended free trial</p>
        </div>
        <div className='mx-3'>
             2 days left
        </div>
        <div className='flex cursor-pointer items-center px-2 mr-7 text-gray-600'>
            <img className='size-12 mr-2' src='/profile.png' alt='profile'/>
            <ChevronDown/>
        </div>
       </div>
    </div>
  )
}

export default Navbar;