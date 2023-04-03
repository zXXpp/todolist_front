import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Index() {
  return (
    <div>
      {/* 可以不携带父级路由 */}
      <NavLink to="test">test</NavLink>
      <NavLink to="test2">test2</NavLink>
      {/* 自动扫描子路由 */}
      <Outlet />
    </div>
  )
}
