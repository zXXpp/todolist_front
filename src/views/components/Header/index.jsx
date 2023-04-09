//react相关
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
//antd相关
import { Popover, Dropdown } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons'


//组件相关
import moduleCss from './index.module.scss'
import { front_loginOut } from '../../../utils'




export default function Header() {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({})

  const IconFont = createFromIconfontCN({
    scriptUrl: window.config.iconfontCN,
  });
  const items = [
    {
      key: '1',
      label: (
        <div onClick={() => navigate('/myinfo')}>个人中心</div>
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
        <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
          <IconFont type='pp-touxiang' style={{ fontSize: '30px' }} />
        </Dropdown>
      </div>
    </div>
  )
}
