/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar,faChartSimple } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'
import Filter from './Filter'

function HotelsList() {
  const {data,loading,error} = useFetch("http://localhost:5000/api/place?featured=true")
    const hotels = data.data
    const [hotel,setHotel] = useState(hotels)
    const [menu,setMenu] = useState(false)
    const handleMenu = ()=>{
      setMenu(!menu)
    }
  return (
    <div className='w-[80%] mx-auto my-4 bg-white h-screen mt-20'>
      <div className='h-10 w-[80%] mx-auto mb-4 bg-white flex justify-center items-center'>
        <div className='w-96 border rounded-lg border-gray-400 flex justify-between px-2 py-1'>
          <input type="text" className='outline-none px-4 w-32 md:w-64' placeholder='Search by city, hotels..' />
          <FontAwesomeIcon icon={faSearch} className='mt-1'/>
        </div>
        <button onClick={handleMenu} className='font-semibold px-4'>FILTER</button>
        {menu ? <Filter menu={handleMenu}/>: null }
      </div>
      {loading? <p>Loading..</p>:
      <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1'>
        {hotels && hotels.map((item)=>(
        <>
        <div className='bg-white mx-2 h-96'key={item._id} >
            <div><img className='h-64 w-64 mx-auto my-2 rounded-xl' src="/img1.jpeg" alt="" /></div>
            <div className='px-0'>
                <div className='flex justify-between'>
                  <p className='font-medium'>{item.city}</p>
                  <p className='text-xs font-medium'><span className='text-xs text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>4.83</p>
                </div>
                <p className='text-gray-600 text-sm'>{item.desc}</p>
                <p className='font-medium'>₹{item.amount}</p>
            </div>
        </div>
        </>
        ))}
      </div>
       }
    </div>
  )
}

export default HotelsList
