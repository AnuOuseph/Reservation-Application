import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function SingleView() {
  return (
    <div className="bg-white mt-20 w-[80%] mx-auto my-4">
      <div className="flex justify-between items-center">
        <h4 className="py-4 md:text-2xl text-lg font-medium">Double room in a lovely apartment</h4>
        <div className="flex">
          <p className="font-medium"><span className='text-sm text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>4.5</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="bg-white w-full p-1">
          <img className="h-[100%] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
        <div className="bg-white grid grid-cols-2 flex flex-wrap w-full h-200 md:pt-0 pt-2">
          <img className="h-[100%] w-full object-cover rounded-xl p-1" src="https://images.unsplash.com/photo-1612152605347-f93296cb657d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
          <img className="h-[100%] w-full object-cover rounded-xl p-1" src="https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
          <img className="h-[100%] w-full object-cover rounded-xl p-1" src="https://images.unsplash.com/photo-1617104611622-d5f245d317f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80" alt="" />
          <img className="h-[100%] w-full object-cover rounded-xl p-1" src="https://images.unsplash.com/photo-1617099443741-a9b51eabd2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-4 mx-4">
        <div className="mx-auto w-[80%]">
          <div>
            <p className="text-2xl font-medium py-4">About this place</p>
            <p className="pb-4">The apartment is cozy, with everything you need. You can use all common areas as long as it is maintained with respect to the things of others. :) Please let me know if you have any questions!</p>
          </div>
          <hr className="my-2" />
          <div>
            <p className="text-2xl font-medium py-4">What this place offers</p>
            <div className="grid grid-cols-2">
              <div>
                <p>Bedroom</p>
                <p>Kitchen</p>
                <p>Parking</p>
                <p>Washing Machine</p>
                <p>Fire Alarm</p>
              </div>
              <div>
                <p>Courtyard View</p>
                <p>Wifi</p>
                <p>Lift</p>
                <p>Air Conditioning</p>
                <p>Hot Water</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="bg-red-100 w-[60%] h-96 mx-auto my-2 p-4 shadow-lg shadow-gray-400 rounded-xl">
            <div className="flex justify-between py-2 mb-2">
              <p className="text-xl font-medium">₹26,000 night</p>
              <p><span></span><span className='text-sm text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span> 4.85 41 reviews</p>
            </div>
            <div className="border border-gray-500 rounded-xl">
              <div className="grid grid-cols-2 border-b border-gray-500">
                <div className="border-r border-gray-500">
                  <p className="p-2 text-xs">CHECK-IN <span><input type="date" className="w-4" placeholder="" name="" id="" /></span></p>
                  <p className="px-2 pb-2">08/09/2023</p>
                </div>
                <div>
                  <p className="p-2">CHECK-OUT</p>
                  <p className="px-2 pb-2">08/09/2023</p>
                </div>
              </div>
              <div className="p-2">
                <p>Rooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleView
