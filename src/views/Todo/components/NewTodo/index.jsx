import React, { useState, useRef } from 'react'
import dayjs from 'dayjs'
import { Input, DatePicker } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import moduleCss from './index.module.scss'
import Icon from '@components/Icon'
import { createTodo } from '@api'



export default function Index(props) {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const [dateValue, setDateValue] = useState('')
  const [state, setState] = useState({
    btnMode: false
  })

  const submit = async (e) => {
    try {
      if (!inputValue) return
      await createTodo({
        content: inputValue,
        objectTime: dateValue?.format('YYYY-MM-DD')
      })
      setInputValue('')
      setDateValue('')
      props.refresh()
    } catch (error) {

    } finally {

    }

  }
  const handlBlur = () => {
    if (!inputValue) setState({ btnMode: false })
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
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
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
        <DatePicker bordered={false} value={dateValue} onChange={(day) => setDateValue(day)} />
      </div>
    </div>
  )
}
