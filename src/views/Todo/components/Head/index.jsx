import React, { useState } from 'react'


import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'

import { showCNweek } from '../../../../utils/index'
import moduleCss from './index.module.scss'

dayjs.extend(weekday)

export default function Index() {

  return (
    <div className={moduleCss.head}>
      <div className='top'>
        <div className='title'>我的一天</div>
        <div>...</div>
      </div>
      <div>
        {dayjs().format('YYYY年M月D日')}，{
          showCNweek(dayjs().weekday())
        }
      </div>
    </div>
  )
}
