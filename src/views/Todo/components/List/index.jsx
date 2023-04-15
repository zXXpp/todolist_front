import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import Icon from '@components/Icon'




import moduleCss from './index.module.scss'
import { getTodoList } from '@api'

export default function Index() {
  const [list, setList] = useState([])
  useEffect(() => {
    getList()
    return () => {

    }

  }, [])
  const getList = async () => {
    const { code, data } = await getTodoList({
      pageIndex: 1, pageSize: 1000,
    })
    setList(data)
  }
  return (
    <div className={moduleCss.list}>
      {list.map((todo, index) => {
        return (
          <div key={todo._id} className='list-item'>
            <div className='contrl'>
            <Icon type='pp-big-circle' />
            </div>
            <div className='todo-content'>
              <div>
                {todo.content}
              </div>
              <div>
                {dayjs(todo.createTime).format('YYYY-MM-DD')}</div>
            </div>
            <div className='mark'></div>
          </div>
        )
      })}
    </div>
  )
}
