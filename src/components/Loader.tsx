import React from 'react'
import Spin from '../assets/spinner.svg'
const Loader:React.FC = () => {
  return (
    <div className='w-full h-full absolute inset-0 flex justify-center items-center'>
      <img src={Spin} alt="spinner"/>
    </div>
  )
}

export default Loader
