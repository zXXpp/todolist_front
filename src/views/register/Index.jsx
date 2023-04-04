import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { Layout, Space, Button, Checkbox, Form, Input, message } from 'antd';

import moduleCss from './index.module.scss'
import { register } from '../../request/index'

const { Header, Footer, Sider, Content } = Layout


export default function Index() {
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const { email, nickName, password } = values
      const { code, data } = await register({
        email, nickName, password
      })
      if (code === '0000') {
        console.log('成功');
        message.success('注册成功')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={moduleCss.register}>
      <div className='form'>
        <div className='title'>注册
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '请输入邮箱！' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickName"
            rules={[{ required: true, message: '请输入昵称！' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="password1"
            rules={[{ required: true, message: '密码不相同！' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
