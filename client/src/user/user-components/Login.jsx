/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Login() {
    const [reg,setReg] = useState(false)
  return (
    <div className='grid grid-cols-2 h-auto px-40'>
        <div className='bg-white flex justify-end items-center'>
            <div className='w-58 bg-white'>
                <p className='text-xl'>Super charge your planning powers.</p>
                <p className='text-6xl mt-2 mb-4'>Let the adventure<br></br> begin..</p>
                {reg ? 
                <div className=' border mt-10 mb-6 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none ' type="password" placeholder='enter your password..' />
                    <div className='h-10 w-10 px-4 bg-blue-500 rounded-full flex items-center justify-center transform translate-x-[-18px] translate-y-[4px]'><button onClick={()=>setReg(false)}><FontAwesomeIcon icon={faArrowRight} /></button></div>
                </div>:
                <div className=' border mt-10 mb-6 border-gray-400 rounded-full w-64 h-12 bg-white flex'>
                    <input className='w-64  px-6 py-2 rounded-full outline-none ' type="email" placeholder='enter your email address..' />
                    <div className='h-10 w-10 px-4 bg-blue-500 rounded-full flex items-center justify-center transform translate-x-[-18px] translate-y-[4px]'><button onClick={()=>setReg(true)}><FontAwesomeIcon icon={faArrowRight} /></button></div>
                </div>}
                <div>
                    <p className='mx-4'>Create an account? <span className='text-blue-600 mx-2 underline cursor-pointer'>Create</span></p>
                </div>
            </div>
        </div>
        <div className='bg-white flex justify-start items-center'>
            <img className='w-4/5' src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="" />
        </div>
    </div>
  )
}

export default Login
