import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import { Layout, Space, Button, Checkbox, Form, Input, message } from 'antd';

import moduleCss from './index.module.scss'
import { register } from '../../request/index'

const { Header, Footer, Sider, Content } = Layout


export default function Index() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const { email, nickName, password } = values
      const { code, data } = await register({
        email, nickName, password
      })
      if (code === '0000') {
        navigate('/login', {
          replace: true
        })
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
            rules={[{ required: true, type: 'email', message: '请输入邮箱！' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickName"
            rules={[{ required: true, min: 1, max: 15, message: '昵称长度在1-15个字符' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, min: 6, max: 20, message: '密码长度在6-20个字符' }]}
          >
            <Input.Password />
          </Form.Item>
          {/* Rule 支持接收 object 进行配置，也支持 function 来动态获取 form 的数据 */}
          <Form.Item
            label="确认密码"
            name="password1"
            rules={[
              { required: true, min: 6, max: 20, message: '密码长度在6-20个字符' },
              // function类型的验证
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('请确认输入密码相同！'));
                },
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 10 }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button type="primary" htmlType="submit" loading={loading}>
                注册
              </Button>
              <span className='extend' onClick={() => navigate('/login', { replace: true })}>返回登陆
              </span>
            </div>

          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
