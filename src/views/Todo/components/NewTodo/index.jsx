import React, { useState } from 'react'

import { Input } from 'antd';

import moduleCss from './index.module.scss'
import Icon from '@components/Icon'


export default function Index() {
  const test = (e) => {
    console.log(e);
  }
  return (
    <div className={moduleCss.newtodo} >
      <div className='left'>
        <div className='btn show-btn'>
          <Icon type='pp-big-circle' />
        </div>
        <div className='input'>
          <Input
            bordered={false}
            style={{
              height: '100%',
              padding: '4px 0'
            }}
            placeholder='添加任务'
            onPressEnter={test}
          />
        </div>
      </div>
      <div className='right'>
        配置器
      </div>
    </div>
  )
}
