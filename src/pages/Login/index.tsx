import doLogin from '@/api/api';
import { Form, Button, Input, message } from 'antd';
import { useHistory, useModel } from 'umi';
import './index.less';

export default function Login() {
  const { initialState } = useModel('@@initialState');
  const { Item } = Form;
  const history = useHistory();
  const { user, singin, singout } = useModel('user');
  const login = async (user: API.Iuser) => {
    doLogin(user).then((res) => {
      if (res.code === 200) {
        history.push('/index');
      } else {
        message.error('登录失败');
      }
    });
    // console.log(data);
  };
  return (
    <div className="login">
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{
          name: '',
          password: '',
        }}
        onFinish={login}
      >
        <Item
          label="账号"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input></Input>
        </Item>
        <Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password></Input.Password>
        </Item>
        <Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Item>
      </Form>
    </div>
  );
}
