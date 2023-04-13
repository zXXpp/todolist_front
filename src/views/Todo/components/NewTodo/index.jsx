import React, { useState, useRef } from 'react'

import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import moduleCss from './index.module.scss'
import Icon from '@components/Icon'



export default function Index() {
  const inputRef = useRef(null)
  const [state, setState] = useState({
    btnMode: false
  })
  const [todo, setTodo] = useState({
    content: '',
    objTime: ''
  })

  const submit = (e) => {
    const { current: { input: { value } } } = inputRef
    if (!value) return
    console.log(value);
  }
  const handlBlur = () => {
    const { current: { input: { value } } } = inputRef
    if (!value) setState({ btnMode: false })
  }
  return (
    <div className={moduleCss.newtodo} >
      <div className='left'>
        <div className='btn show-btn'>
          {state.btnMode ? <Icon title='创建任务' type='pp-big-circle' onClick={submit} /> : <PlusOutlined title='添加任务' onClick={() => inputRef.current.focus({ cursor: 'end' })} />}
        </div>
        <div className='input'>
          <Input
            ref={inputRef}
            onFocus={() => setState({ btnMode: true })}
            onBlur={handlBlur}
            bordered={false}
            style={{
              height: '100%',
              padding: '4px 0'
            }}
            placeholder='添加任务'
            onPressEnter={submit}
            max={500}
          />
        </div>
      </div>
      <div className='right'>
        配置器
      </div>
    </div>
  )
}
