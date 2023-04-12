import React from 'react'


import moduleCss from './index.module.scss'
import Head from './components/Head'
import List from './components/List'
import NewTodo from './components/NewTodo'


export default function Index() {
  return (
    <div className={moduleCss.todo}>
      <div className='content'>
        <Head />
        <List />
        <NewTodo />
      </div>
    </div>
  )
}
