import React from 'react'
import { Navigate } from 'react-router'

export default function index() {
  return (
    <div>我是主页

      <Navigate to="/login" />
    </div>
  )
}
