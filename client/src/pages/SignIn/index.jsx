import React from 'react';
import { Link } from 'react-router-dom';


import {
  Row, Col, Card, Button, Form, Input,
} from 'antd';

function SignIn() {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  return (
    <section className="app-section">

      <Row justify="center">

        <Col xl={6} lg={8} md={10} sm={12} xs={24}>
          <Card style={{ marginTop: 45 }}>
            <Col span={24} className="typo-grey typo-center">
              <h2>Chào mừng bạn quay trở lại</h2>
            </Col>
            <Form layout="vertical">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Bắt buộc email' },
                  { type: 'email', message: 'Nhập đúng định dạng email' },
                ]}
                style={{ marginBottom: 15 }}
              >
                <Input name="email" type="email" />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Yêu cầu mật khẩu' }]}
                style={{ marginBottom: 15 }}
              >
                <Input.Password name="password" />
              </Form.Item>

              <Row gutter={[8, 8]} style={{ marginTop: 15 }} justify="end">

                <Col xl={12} lg={12} md={12} sm={12} xs={12} className="typo-right">
                  <Link to = "/home">
                    <Button type="primary" htmlType="submit"  >
                      Đăng nhập                    
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>

  );
}

export default SignIn;