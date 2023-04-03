import React, { Fragment } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes/index.js'



export default function App() {
  //路由表设置
  const elements = useRoutes(routes)
  return (
    <Fragment>
      {/* className回调执行 */}
      <NavLink
        to='/login'
        className={({ isActive }) => {
          return 'active'
        }}
      >登录</NavLink>
      <NavLink
        to='/register'
        className={({ isActive }) => {
          return 'active'
        }}
      >注册</NavLink>
      {/* 注册路由 */}
      {elements}
    </Fragment>
  )
}
