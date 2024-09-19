import React from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export  function Layout() {
  return (
    <div className='flex flex-row h-screen w-screen bg-white '>
        <div><Sidebar/></div>
        <div className='p-4'>
            <div><Header/></div>
            </div>

        </div>
  )
}
