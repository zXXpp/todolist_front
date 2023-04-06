import React, { useEffect } from 'react'
import { Navigate } from 'react-router'


import { test } from '../../request'
export default function index() {
  test()
  return (
    <div>
      我是主页
    </div>
  )
}
