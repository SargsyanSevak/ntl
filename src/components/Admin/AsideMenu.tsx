import React from 'react'
import { Link } from 'react-router-dom'

const AsideMenu = () => {
  return (
    <div className='w-[20%] py-6'>
      <nav className='w-full h-full border-r-2'>
        <ul className='flex flex-col gap-6'>
            <li>
                <Link to='profile'>My Profile</Link>
            </li>
            <li>
                <Link to='notifications'>Notifications</Link>
            </li>
            <li>
                <Link to='teams'>Teams</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default AsideMenu
