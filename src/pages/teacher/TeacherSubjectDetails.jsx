import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectForOverview } from '../../store/overviewTeacher/actions';
import { selectSubjectOverview } from '../../store/overviewTeacher/selectors';
import { selectTeacherStudents } from '../../store/teacher/selectors';
import DoughnutChart from '../../components/charts/DoughnutChart';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

export default function TeacherSubjectDetails() {
  const dispatch = useDispatch();
  const { subjectid } = useParams();
  const results = useSelector(selectSubjectOverview);
  const students = useSelector(selectTeacherStudents);

  useEffect(() => {
    dispatch(getSubjectForOverview(subjectid));
  }, [dispatch, subjectid]);

  const renderCharts = () => {
    return results.map(({ score, studentId }, i) => (
      <Col key={i}>
        <DoughnutChart
          data={[score, 100 - score]}
          color={['#8F1CB8', '#eee']}
          title={`${
            students.find((student) => student.id === studentId).name
          } ${score}%`}
        />
      </Col>
    ));
  };

  return (
    <Layout>
      <Layout style={{ padding: '24px', minHeight: '92vh' }}>
        <Content className="site-layout-background">
          <Row>{results && students ? renderCharts() : null}</Row>
        </Content>
      </Layout>
    </Layout>
  );
}
