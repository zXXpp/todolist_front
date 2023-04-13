import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'


import moduleCss from './index.module.scss'

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
