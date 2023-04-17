import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Button, Form, Input } from 'antd';

import moduleCss from './index.module.scss'

import { login } from '@api'

import { front_login } from '@utils';




export default function Index() {
    let [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
            setLoading(true)
            const { email, password } = values
            const { data, code } = await login({ email, password })
            if (code === '0000') {
                if (searchParams.has('redirect')) {
                    front_login(data.token, searchParams.get('redirect'))
                } else {
                    front_login(data.token)
                }
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
        <div className={moduleCss.login}>
            <div className='form'>
                <div className='title'>登录</div>
                <Form
                    name="login"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="E-mail"
                        name="email"
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
                        <Button type="primary" htmlType="submit" loading={loading}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
