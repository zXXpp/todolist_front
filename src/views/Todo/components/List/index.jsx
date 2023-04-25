import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import dayjs from 'dayjs'

import Icon from '@components/Icon'




import moduleCss from './index.module.scss'
import { getTodoList, updateTodo } from '@api'

export default forwardRef(function Index(props, ref) {
  const [list, setList] = useState([])
  useImperativeHandle(
    ref,
    () => ({ getList })
  );
  useEffect(() => {
    getList()
    return () => {

    }

  }, [])
  const getList = async () => {
    const { code, data } = await getTodoList({
      pageIndex: 1, pageSize: 1000,
    })
    if (code === '0000') {
      setList(data)
    }
  }
  const updateById = async (id, update) => {
    try {
      const { code } = await updateTodo({
        id,
        update
      })
      if (code === '0000') {
        getList()
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={moduleCss.list}>
      {list.map((todo, index) => {
        return (
          <div key={todo._id} className='list-item'>
            <div className='contrl'>
              <Icon
                type='pp-big-circle'
                onClick={() => updateById(todo._id, {
                  status: 2
                })}
              />
            </div>
            <div className='todo-content'>
              <div className='text-content'>
                {todo.content}
              </div>

              <div className='todo-info'>
                任务
                {
                  todo.remind?.objectTime ? dayjs(todo.remind.objectTime).format('YYYY-MM-DD') : ''
                }
              </div>
            </div>
            <div className='mark'></div>
          </div>
        )
      })}
    </div>
  )
})
