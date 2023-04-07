import React, { useEffect, useState } from 'react'

import moduleCss from './index.module.scss'

import { test } from '../../../request'

export default function Header() {
  const [userInfo, setUserInfo] = useState({})
  //钩子函数
  useEffect(() => {
    test()
    if (localStorage.getItem('userInfo')) {
      setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
    }
    //return的代码等于卸载钩子
    return () => {
      console.log('卸载');
    }
  }, [])
  return (
    <div className={moduleCss.header}>
      <div className='left'>
        todo-list
      </div>
      <div className='right'>
        {userInfo.nickName}
      </div>
    </div>
  )
}
