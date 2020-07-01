import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTeacherSubjects } from '../../store/teacher/selectors';
import { Layout, Form, Input, Button, Select } from 'antd';

const { Content } = Layout;
const { Option } = Select;

export default function Addquestion() {
  const subjects = useSelector(selectTeacherSubjects);
  const [subject, setSubject] = useState(1);
  const [question, setQuestion] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');

  const handleChange = (value) => {
    setSubject(value);
  };

  const addQuestion = () => {
    console.log(subject, question, answer1, answer2, answer3, answer4);
  };

  return (
    <Layout>
      <Layout style={{ padding: '24px', height: '92vh' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 90,
          }}
        >
          <h3>
            Select a subject and fill in the data to create a new question.
          </h3>
          <Form name="basic" initialValues={{ remember: true }}>
            {subjects ? (
              <Form.Item
                label="Select a subject"
                name="subject"
                rules={[{ required: true, message: 'Please select a subject' }]}
              >
                <Select
                  value={subject}
                  style={{ width: 120, marginBottom: 15 }}
                  onChange={(e) => handleChange(e)}
                >
                  {subjects.map(({ name, id }, i) => (
                    <Option key={i} value={id}>
                      {name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            ) : null}

            <Form.Item
              label="Question"
              name="Question"
              rules={[{ required: true, message: 'Please input a question!' }]}
            >
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Correct answer"
              name="Correct answer"
              rules={[
                { required: true, message: 'Please input the correct answer' },
              ]}
            >
              <Input
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Wrong answer #1"
              name="Wrong answer #1"
              rules={[
                { required: true, message: 'Please input a wrong answer' },
              ]}
            >
              <Input
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Wrong answer #2"
              name="Wrong answer #2"
              rules={[
                { required: true, message: 'Please input a wrong answer' },
              ]}
            >
              <Input
                value={answer3}
                onChange={(e) => setAnswer3(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Wrong answer #3"
              name="Wrong answer #3"
              rules={[
                { required: true, message: 'Please input a wrong answer' },
              ]}
            >
              <Input
                value={answer4}
                onChange={(e) => setAnswer4(e.target.value)}
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" onClick={addQuestion}>
              Add question to the list
            </Button>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
}
