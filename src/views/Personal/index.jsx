import React, { useState, useEffect } from 'react'

import { Form, Input, Button, Upload, Radio, message } from 'antd'
import { EditOutlined, PlusOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons'


import Pic from '@components/Pic'
import moduleCss from './index.module.scss'

import { getUserInfo, updateUserInfo } from '@api'

export default function Index() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
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
  useEffect(() => {
    getInfo()
    return () => {
    }
  }, [])


  const getInfo = async () => {
    try {
      const { code, data } = await getUserInfo()
      if (code === '0000') {
        data.sex = data.sex + ''
        form.setFieldsValue(data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  const onFinish = async (values) => {
    try {
      setLoading(true)
      const { code, data } = await updateUserInfo(values)
      if (code === '0000') {
        reset()
        message.success('保存成功')
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

  const beforeUpload = (file) => {
    console.log(file);
    return false
  }
  const reset = () => {
    setEditState(false);
    form.resetFields();
    getInfo()
  }

  return (
    <div className={moduleCss.personal}>
      <div className='show'>
        <div className='title'>个人中心{editState ? '' : (<EditOutlined onClick={() => setEditState(true)} title='编辑' className='edit' />)}</div>
        <Form
          form={form}
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
            <Input placeholder='请输入昵称' />
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
            <Input placeholder='请输入邮箱' />
          </Form.Item>
          <Form.Item
            label="电话号码"
            name="phoneNumber"
            validateTrigger={['onBlur']}
            rules={[{ type: 'string', validateTrigger: 'onBlur', len: 11, message: '请输入合法电话号码！' }]}
          >
            <Input placeholder='请输入手机号' />
          </Form.Item>
          {
            editState ? (<Form.Item wrapperCol={{ offset: col.labelCol, span: col.wrapperCol }} >
              <Button type="primary" htmlType='submit' style={{ marginRight: '30px' }} loading={loading}>
                保存
              </Button>
              <Button type="primary" danger ghost onClick={reset}>
                放弃
              </Button>
            </Form.Item>) : ''
          }
        </Form>
      </div>
    </div>
  )
}
