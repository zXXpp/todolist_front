import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'

import { createFromIconfontCN } from '@ant-design/icons'


import Header from '../components/Header'


export default function Index() {
  const IconFont = createFromIconfontCN({
    scriptUrl: window.config.iconfontCN,
  });
  return (
    <div>
      <Header />
    </div>
  )
}
