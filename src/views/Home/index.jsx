import React from 'react'
import { Outlet } from 'react-router-dom'



import Header from '@components/Header'


export default function Index() {
  return (
    <div >
      <Header />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}
