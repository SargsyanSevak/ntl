import React from 'react'

const LanguageSwitcher = () => {
  return (
    <div className='w-[100px] h-[40px]  flex justify-around items-center'>
      <div className='w-1/2 h-full flex items-center'>
        <img src="https://cdn.countryflags.com/thumbs/armenia/flag-round-250.png" alt="" className='w-[30px] h-[30px] cursor-pointer'/>
      </div>
      <div className='w-1/2 h-full flex items-center justify-end '>
        <img src="https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png" alt="" className='w-[30px] h-[30px] cursor-pointer'/>
      </div>
    </div>
  )
}

export default LanguageSwitcher
