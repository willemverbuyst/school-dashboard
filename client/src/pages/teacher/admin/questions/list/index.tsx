import { Button, Form, Layout, Row, Select } from "antd";
import { useEffect } from "react";

import { Spinner } from "../../../../../components/spinner";
import {
  useGetQuestions,
  useTeacherGuard,
  useUser,
} from "../../../../../hooks";
import { QuestionsAndAnswers } from "./QuestionsAndAnswers";

const { Content } = Layout;
const { Option } = Select;

export function ListOfQuestions(): JSX.Element {
  const [form] = Form.useForm();
  const { user } = useUser();
  const subjects = user?.data.subjects.data;
  const { filter, setFilter, questions } = useGetQuestions();
  const { teacherGuard } = useTeacherGuard();

  useEffect(() => teacherGuard());

  const getListOfQuestions = ({ subject }: { subject: string }): void => {
    setFilter(subject);
  };

  return (
    <Content
      className="site-layout-content"
      style={{ padding: 90, height: 80, overflow: "scroll" }}
    >
      {subjects ? (
        <>
          <Row justify="center" style={{ padding: "12px" }}>
            SELECT A SUBJECT TO GET ALL THE CURRENT QUESTIONS IN THE DATABASE
            FOR THAT SUBJECT
          </Row>

          <Row justify="center">
            <Form
              form={form}
              name="basic"
              initialValues={{ remember: true }}
              onValuesChange={getListOfQuestions}
            >
              <Form.Item
                name="subject"
                rules={[{ required: true, message: "Please select a subject" }]}
              >
                <Select placeholder="all subjects" style={{ width: 160 }}>
                  {subjects.map(({ name, id }, i) => (
                    <Option key={i} value={id}>
                      {name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>

            {filter !== "all" ? (
              <Button onClick={() => setFilter("all")}>All</Button>
            ) : null}
          </Row>
        </>
      ) : (
        <Spinner />
      )}
      <QuestionsAndAnswers questions={questions} />
    </Content>
  );
}
