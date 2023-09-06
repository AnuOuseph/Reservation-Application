/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar,faChartSimple } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'

function HotelsList() {
  const {data,loading,error} = useFetch("http://localhost:5000/api/place?featured=true")
    const hotels = data.data
    console.log(hotels)
    const [hotel,setHotel] = useState(hotels)
    console.log("hello",hotel)
    const [menu,setMenu] = useState(false)
    const handleMenu = ()=>{
      setMenu(true)
    }
  return (
    <div className='w-[80%] mx-auto my-4 bg-red-100 h-screen mt-20'>
      <div className='h-10 w-[80%] mx-auto mb-4 bg-yellow-100 flex justify-center items-center'>
        <div className='w-96 border border-gray-700 flex justify-between px-2 py-1'>
          <input type="text" className='outline-none px-4 w-72' />
          <FontAwesomeIcon icon={faSearch} className='mt-1'/>
        </div>
        <button onClick={handleMenu} className='font-semibold px-4'>FILTER</button>
      </div>
      {loading? <p>Loading..</p>:
      <div className='grid grid-cols-4'>
        {hotels && hotels.map((item)=>(
        <>
        <div className='bg-blue-100 mx-2 h-96'key={item._id} >
            <div><img className='h-64 w-64 mx-auto my-2 rounded-xl' src="/img1.jpeg" alt="" /></div>
            <div className='px-4'>
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
       {menu &&
       <div className='bg-gray-200 '>
        <h1>hbugdvgfeyt</h1>
       </div>
        }
    </div>
  )
}

export default HotelsList
