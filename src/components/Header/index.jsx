import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite'

import userInfo from '@/store/userInfo'
//antd相关
import { Dropdown } from 'antd';
import Icon from '../Icon'

//组件相关
import moduleCss from './index.module.scss'

import { front_loginOut } from '@utils'




export default observer(function Header() {


  const items = [
    {
      key: '1',
      label: (
        <NavLink to={'personal'}>
          <div>个人中心 {userInfo.nickName}</div>
        </NavLink>
        // <div onClick={() => navigate('personalCenter')}>
        //   <div>个人中心 {userInfo.nickName}</div>
        // </div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => front_loginOut()}>退出</div>
      ),
    },
  ];
  //钩子函数
  useEffect(() => {
    // test()
    console.log('header渲染了');

    if (localStorage.getItem('userInfo')) {
      userInfo.setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
      // setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
    }
    //return的代码等于卸载钩子
    return () => {
      console.log('卸载');
    }
  }, [])
  return (
    <div className={moduleCss.header}>
      <div className='left'>
        <NavLink to={''}>
          todo-list
        </NavLink>
      </div>
      <div className='right'>
        <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
          <Icon type='pp-touxiang' style={{ fontSize: '30px' }} />
          {/* <IconFont type='pp-touxiang' style={{ fontSize: '30px' }} /> */}
        </Dropdown>
      </div>
    </div>
  )
})
