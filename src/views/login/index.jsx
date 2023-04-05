import React, { useState, Fragment } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { Layout, Space, Button, Checkbox, Form, Input } from 'antd';

import moduleCss from './index.module.scss'

import { login } from '../../request/index'

const { Header, Footer, Sider, Content } = Layout



export default function Index() {
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
            const { name, password } = values
            const { data, code } = await login({ email: name, password: password })
            
        } catch (error) {
            console.log(error);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={moduleCss.login}>
            <div className='form'>
                <div className='title'>登录</div>
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
                        name="username"
                        rules={[{ required: true, type: 'email', message: '请输入你的邮箱' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                        <div className='extend'>
                            <span onClick={() => navigate('/register')}>注册用户</span>
                            {/* <span onClick={navigator('/')}>忘记密码？</span> */}
                        </div>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
