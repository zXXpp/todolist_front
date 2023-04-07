import React, { Fragment } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes/index.js'





export default function App() {
  //路由表设置
  const elements = useRoutes(routes)
  return (
    <Fragment>
      {/* 注册路由 */}
      {elements}
    </Fragment>
  )
}
