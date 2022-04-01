import { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Form, Input, Button, Row, Col } from 'antd';
import { useUser } from '../../../auth/hooks/useUser';
import { useSubject } from './hooks/useSubject';

const { Content } = Layout;

const AddSubject = (): ReactElement => {
  const [form] = Form.useForm();
  const history = useHistory();
  const { user } = useUser();
  const addSubject = useSubject();

  useEffect(() => {
    if (user?.token === null || user?.data.user.role !== 'TEACHER') {
      history.push('/');
    }
  });

  const handleSubmit = (input: { subject: string }) => {
    addSubject(input.subject);
    form.resetFields();
  };

  return (
    <Layout>
      <Layout style={{ padding: '24px', height: '92vh' }}>
        <Content className="site-layout-background">
          <Row justify="center" style={{ padding: '24px' }}>
            {'Add a subject'.toUpperCase()}
          </Row>

          <Row justify="center">
            <Col style={{ width: 650 }}>
              <Form
                form={form}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
              >
                <Form.Item
                  name="subject"
                  rules={[
                    { required: true, message: 'Please input a subject!' },
                  ]}
                >
                  <Input type="text" placeholder="Subject" />
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      backgroundColor: '#B81D9D',
                      border: 'none',
                    }}
                    type="primary"
                    htmlType="submit"
                  >
                    Add Subject to the curriculum
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AddSubject;
