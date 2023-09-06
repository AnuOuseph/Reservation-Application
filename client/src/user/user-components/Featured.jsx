/* eslint-disable no-unused-vars */
import React from 'react'
import useFetch from '../../hooks/useFetch'

function Featured() {
    const {data,loading,error} = useFetch("http://localhost:5000/api/place?featured=true")
    const hotels = data.data
    console.log(hotels)
   
  return (
    <>
      <div className='md:pl-40 md:pr-40 py-6 text-center'>
        <p className='text-4xl font-semibold p-4'>Popular Properties</p>
        <p className='text-md'>Keep calm & travel on</p>
      </div>
      <div className='bg-white md:px-40 px-6 py-6'>
        {loading? <p>Loading..</p>: (
        <div className='md:grid md:grid-cols-4'>
            {hotels && hotels.map((item)=>(
            <div className='bg-gray-100 py-6 mx-2 my-2' key={item._id}>
                <div className='px-4 py-1'>
                    <img className='rounded-3xl' src="https://cdn.pixabay.com/photo/2020/06/15/17/10/ancient-5302626_640.jpg" alt="" />
                </div>
                <div className='bg-gray-100 px-6 py-2 flex justify-between'>
                    <div>
                        <p className='text-md text-gray-800'><b>{item.city}</b></p>
                        <p className='text-sm text-gray-600'>{item.name}</p>
                        <p className='text-sm text-gray-800 font-semibold'> Starting from ₹ {item.amount}.00</p>
                    </div>
                    <div>
                        <p className='text-md font-semibold'>{item.rating}</p>
                    </div>
                </div>
            </div> 
            ))}
        </div>
        )}
      </div>
    </>
  )
}

export default Featured
