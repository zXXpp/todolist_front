import React, { useState } from 'react'
import moduleCss from './index.module.scss'

export default function Index() {

  return (
    <div className={moduleCss.newtodo} >
      <div className='left'>
        <div>按钮</div>
        <div>输入框</div>
      </div>
      <div className='right'>
        配置器
      </div>
    </div>
  )
}
