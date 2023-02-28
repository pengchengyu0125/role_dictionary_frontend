import { Card, Form, Input, Button, Checkbox } from "antd"
import logo from '@/assets/logo.jpg'
import './index.scss'

function Login() {
    const onFinish = values => {
        console.log(values)
    }
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                <Form
                    onFinish={ onFinish }
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input username'
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input password'
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login