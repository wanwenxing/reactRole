import React, { Component } from 'react'

//css文件的引入
import './Login.css'


//引入entd布局
import { Layout, Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {inject,observer} from 'mobx-react';

const { Header, Footer, Content } = Layout;
@inject('user')

@observer
class Login extends Component {

    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 8 },
        };
        const tailLayout = {
            wrapperCol: { offset:5, span:12 },
        };

        const onFinish = values => {
            console.log('Success:', values);
            this.props.user.login()
            .then((resp)=>{
              console.log(resp);
              this.props.history.push("/home")
              
            })
            .catch((err)=>{
               console.log(err);
               
            })
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div>
                <Layout>
                    <Header>班级管理系统</Header>
                    <Content>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="输入账户"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="输入密码"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>记住登录</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                   登录
                                 </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                    <Footer>版权声明</Footer>
                </Layout>
            </div>
        )
    }

}

export default Login