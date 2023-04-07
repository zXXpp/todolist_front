import React, { useEffect, useState } from 'react'

import moduleCss from './index.module.scss'

import { test } from '../../../request'
import { Popover } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons'


export default function Header() {
  const [userInfo, setUserInfo] = useState({})

  const IconFont = createFromIconfontCN({
    scriptUrl: window.config.iconfontCN,
  });
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
        <Popover content={Content}>
          <IconFont type='pp-touxiang' style={{ fontSize: '30px' }} />
        </Popover>
      </div>
    </div>
  )
}

function Content() {
  return (
    <div>haha</div>
  )
}
