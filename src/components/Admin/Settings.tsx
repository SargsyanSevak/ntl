import React from 'react'
import AsideMenu from './AsideMenu'
import { Outlet } from 'react-router-dom'

const Settings = () => {
  return (
    <div className='w-full h-screen md:px-4 px-0 flex'>
     <AsideMenu/>
     <div className='content p-6 w-[80%]'>
         <Outlet/>
     </div>
    </div>
  )
}

export default Settings
