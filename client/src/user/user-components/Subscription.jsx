/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

function Subscription() {
  return (
    <div className='w-full h-36 bg-white flex items-center justify-center'>
      <div className=''>
        <div className='flex justify-center py-2'>
            <p className='text-xl'>Subscribe and we'll send the best deals for you.</p>
        </div>
        <div className='flex justify-center py-2'>
            <input className='outline-none h-10 w-96 px-4 border' placeholder='Enter your email..' type="email" />
            <button className='bg-blue-600 text-white text-md px-2 mx-2'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscription
