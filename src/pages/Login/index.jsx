import React, { useCallback, useState } from 'react';
import { Avatar, Button, Card, Form, Input, Popover } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { SwatchesPicker } from 'react-color';
import { socketIo } from '../../utils/socket';
import { registerAndLogin } from '../../api/user';
import bg from './bg.jpg';

export const Login = ({ setLoginInfo }) => {
  const [nickname, setNickname] = useState();
  const [color, setColor] = useState('#ccc');
  const onFinish = useCallback(async (data) => {
    const client = socketIo();
   
    client.register(data.nickname, (err, user) => {
      if (err) { console.log(err, 'err' )}
      console.log(user, 'user');
    });

    const res = await registerAndLogin({ ...data, color });
    console.log(res, 'res');

    setLoginInfo({
      ...data,
      color,
    })
  }, [color, setLoginInfo]);

  const onChangeNickName = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const handleChangeColor = useCallback((color) => {
    setColor(color.hex);
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: `url(${bg})`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Card style={{ width: "22%" }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 36,
        }}>
          <Popover content={<SwatchesPicker color={color} onChange={handleChangeColor} />} trigger="click">
            <div style={{ cursor: 'pointer' }}>
              {
                nickname ? (
                  <Avatar size={64} style={{ background: color, fontSize: 16, color: '#fff' }} >{nickname?.length > 3? nickname[0] : nickname}</Avatar>
                ) : (
                  <Avatar size={64} icon={<UserOutlined />} />
                )
              }
            </div>
          </Popover>
        </div>
        <Form onFinish={onFinish}>
          <Form.Item
            name="nickname"
            rules={[{ required: true, message: '请输入昵称！' }]}
          >
            <Input
              size="large"
              placeholder="请输入昵称" 
              prefix={<UserOutlined className="site-form-item-icon" />} 
              onChange={onChangeNickName}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input.Password size="large" placeholder="请输入密码" prefix={<LockOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 24 }} style={{ marginTop: 42 }}>
            <Button type="primary" size="large" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}