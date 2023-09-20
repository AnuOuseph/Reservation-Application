import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircle} from "@fortawesome/free-regular-svg-icons"




function SingleView() {
  return (
    <div className="bg-white mt-20 w-[80%] mx-auto my-4">
      <div className="md:flex justify-between items-center py-4">
        <div>
          <h4 className="md:text-2xl text-lg font-medium">Double room in a lovely apartment</h4>
          <p>Pathanamthitta, Kerala</p>
        </div>
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
        <div className="mx-auto md:w-[80%]">
          <div>
            <p className="text-2xl font-medium py-4">About this place</p>
            <p className="pb-4 text-justify">The apartment is cozy, with everything you need. You can use all common areas as long as it is maintained with respect to the things of others. :) Please let me know if you have any questions!</p>
          </div>
          <hr className="my-2" />
          <div>
            <p className="text-2xl font-medium py-4">What this place offers</p>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Bedroom</p>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Kitchen</p>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Parking</p>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Washing Machine</p>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Fire Alarm</p>
              </div>
              <div>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Courtyard View</p>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Wifi</p>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Lift</p>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Air Conditioning</p>
                <p className="text-xs md:text-sm py-1"><span className="text-xs pr-2 text-gray-700"><FontAwesomeIcon icon={faCircle} /></span>Hot Water</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="bg-white md:w-[80%] lg:w-[60%] w-[100%] h-auto mx-auto md:my-2 my-10 p-4 shadow-lg shadow-gray-400 rounded-xl">
            <div className="flex justify-between py-2 mb-2">
              <p className="text-xl font-medium">₹26,000 night</p>
              <p><span className='text-sm text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span> 4.85</p>
            </div>
            <div className="border border-gray-500 rounded-xl">
              <div className="grid grid-cols-2 border-b border-gray-500">
                <div className="border-r border-gray-500">
                  <p className="p-2 text-xs flex justify-between">CHECK-IN <span><input type="date" className="w-4" placeholder="" name="" id="" /></span></p>
                  <p className="px-2 pb-2 text-xs font-medium">08/09/2023</p>
                </div>
                <div>
                  <p className="p-2 text-xs flex justify-between">CHECK-OUT <span><input type="date" className="w-4" placeholder="" name="" id="" /></span></p>
                  <p className="px-2 pb-2 text-xs font-medium">08/09/2023</p>
                </div>
              </div>
              <div className="p-2">
                <p className="mb-2 text-sm">Select Rooms:</p>
                <button className="w-10 border border-gray-400 rounded-xl text-xs p-2 mx-2">201</button>
                <button className="w-10 border border-gray-400 rounded-xl text-xs p-2 mx-2">202</button>
              </div>
            </div>
            <button className="bg-blue-600 w-full my-4 py-1 rounded-xl text-md text-white font-medium">Reserve</button>
            <div className="p-2">
              <div className="flex justify-between text-sm py-1">
                <p>₹4,070 x 5 nights</p>
                <p>₹20,350</p>
              </div>
              <div className="flex justify-between text-sm py-1">
                <p>Cleaning fee</p>
                <p>₹400</p>
              </div>
              <div className="flex justify-between text-sm py-1">
                <p>Airbnb service fee</p>
                <p>₹2,929</p>
              </div>
            </div>
            <hr className="border-sm border-gray-400 pb-1"/>
            <div className="flex justify-between mb-2">
              <p className="font-medium text-sm">Total before taxes</p>
              <p className="font-medium text-sm">₹23,679</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleView
