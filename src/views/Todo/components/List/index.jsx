import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'



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
      pageIndex: 1, pageSize: 20,
    })
    setList(data)
  }
  return (
    <div className={moduleCss.list}>
      {list.map((todo, index) => {
        return (
          <div key={index}>
            {todo.content}
            {dayjs(todo.createTime).format('YYYY-MM-DD')}
          </div>
        )
      })}
    </div>
  )
}
