import React, { useRef } from 'react'


import moduleCss from './index.module.scss'
import Head from './components/Head'
import List from './components/List'
import NewTodo from './components/NewTodo'


export default function Index() {
  const listRef = useRef(null)
  const refresh = () => {
    listRef.current.getList()
  }
  return (
    <div className={moduleCss.todo}>
      <div className='content'>
        <Head />
        <List ref={listRef} />
        <NewTodo refresh={refresh} />
      </div>
    </div>
  )
}
