/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { faRoute,faBars } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-40 py-4 flex justify-between">
      <h1 className='text-2xl'><span className='mx-2 text-blue-500'><FontAwesomeIcon icon={faRoute}/></span><b>Booking.</b></h1>
      <div >
        <div>
        <div className='border text-xl px-4 py-1 rounded-full'>
        <button className='mx-2' onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
        </button>
        <FontAwesomeIcon icon={faUser}/>
        </div>
        {isOpen && (
        <div className=" my-2 absolute bg-white shadow-md shadow-gray-200 text-md rounded-md shadow-lg">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Signup</a>
        </div>
        )}
        </div>
      </div>
      
    </div>   
  )
}

export default NavBar
