import React, { useState } from 'react'

import { Form, Input, Button, Upload, Radio } from 'antd'
import { EditOutlined, PlusOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons'


import Pic from '../components/Pic'
import moduleCss from './index.module.scss'

export default function Index() {
  const [editState, setEditState] = useState(false)
  const [col, setCol] = useState({
    labelCol: 6,
    wrapperCol: 10
  })

  const [info, setInfo] = useState({
    picUrl: '',
    nickName: '',
    sex: '',
    email: '',
    phoneNumber: ''
  })
  const onFinish = async (values) => {
    return
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const beforeUpload = (file) => {
    console.log(file);
    return false
  }
  return (
    <div className={moduleCss.personal}>
      <div className='show'>
        <div className='title'>个人中心{editState ? '' : (<EditOutlined onClick={() => setEditState(true)} title='编辑' className='edit' />)}</div>
        <Form
          name="up"
          className='info'
          labelCol={{ span: col.labelCol }}
          wrapperCol={{ span: col.wrapperCol }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          disabled={!editState}
        >
          <Form.Item
            label="头像"
          >
            {
              editState ? (
                <Upload
                  disabled={true}
                  name="avatar"
                  listType="picture-circle"
                  className="avatar-uploader"
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                >
                  {info.picUrl ? (
                    <img
                      src={info.picUrl}
                      alt="avatar"
                      style={{
                        width: '100%',
                      }}
                    />
                  ) : (
                    <PlusOutlined />
                  )}
                </Upload>
              ) : <Pic picUrl={info.picUrl} size={'100px'} />
            }
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickName"
            rules={[{ required: true, min: 1, max: 15, message: '昵称长度在1-15个字符' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="性别"
            name="sex"
          >
            <Radio.Group>
              <Radio value="1"><ManOutlined style={{ color: '#1677ff' }} /></Radio>
              <Radio value="0"><WomanOutlined style={{ color: 'pink' }} /></Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, type: 'email', message: '请输入邮箱！' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="电话号码"
            name="phoneNumber"
          >
            <Input />
          </Form.Item>
          {
            editState ? (<Form.Item wrapperCol={{ offset: col.labelCol, span: col.wrapperCol }} >
              <Button type="primary" htmlType='submit' style={{ marginRight: '30px' }}>
                保存
              </Button>
              <Button type="primary" danger ghost onClick={() => setEditState(false)}>
                放弃
              </Button>
            </Form.Item>) : ''
          }
        </Form>
      </div>
    </div>
  )
}
