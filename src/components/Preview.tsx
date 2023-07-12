import React from 'react'
import { Map } from './Map'
import { FiPhoneCall } from "react-icons/fi";
import { HiLocationMarker, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaWeight } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import { BsTruckFront } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { RiPinDistanceLine } from "react-icons/ri";
const Preview = () => {
  return (
    <div className='w-full p-4 h-screen bg-white flex flex-col justify-between'>
      <div className='map w-full h-[70%] bg-green-300 rounded-[20px] overflow-hidden shadow mb-2'>
        <Map/>
      </div>
      <div className='w-full h-[30%] flex flex-col justify-around items-center gap-2'>
            <div className='bg-[#ffc5] w-full h-[180px] rounded-[20px] shadow'>
                <div className='w-full flex justify-around items-center pt-2 text-xl font-bold'>
                    <h4>Erevan</h4>
                    <span className='text-2xl'><GiPathDistance/></span>
                    <h4>Moscow</h4>
                </div>
                <div className='flex flex-wrap  justify-around items-center w-full h-[70%] px-2'>
                    <div className='shadow-md w-[45%] h-8  rounded-lg flex justify-center items-center gap-2 text-black'>
                        <span><RiPinDistanceLine/></span>
                        <p>2300km</p>
                    </div>
                    <div className='shadow-md w-[45%] h-8  rounded-lg flex justify-center items-center  gap-2'>
                    <span><BsTruckFront/></span>
                        <p>Tent</p>
                    </div>
                    <div className='shadow-md w-[45%] h-8  rounded-lg flex justify-center items-center  gap-2'>
                    <span><GiResize/></span>
                        <p>86մ³</p>
                    </div>
                    <div className=' shadow-md w-[45%] h-8  rounded-lg flex justify-center items-center  gap-2'>
                    <span><FaWeight/></span>
                        <p>13000kg</p>
                    </div>
                </div>
                {/* <div className='w-full h-[80%] flex flex-wrap px-4'>
                    <div className='w-full h-6  border-b-2 flex justify-start items-center'> Distance 23000km</div>
                    <div className='w-full h-6 border-b-2 flex justify-start items-center'>Truck type Tent</div>
                    <div className='w-full h-6 border-b-2 flex justify-start items-center'>Weight 23000km</div>
                    <div className='w-full h-6 flex justify-start items-center'>Value  86մ³</div>
                </div> */}
            </div>
            <div className='bg-[#edfcf7] w-full h-[70px] rounded-[20px] shadow flex justify-around items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='font-bold text-xl'>NTL LOGISTICS INC.</h4>
                    <h4 className='text-gray-500'>Gevorg Vardanyan</h4>
                </div>
                <div>
                    <div className='w-[50px] h-[50px] rounded-full bg-[#01c07b] text-white text-xl flex justify-center items-center'> 
                        <FiPhoneCall/>
                    </div>
                </div>

            </div>
      </div>
    </div>
  )
}

export default Preview
