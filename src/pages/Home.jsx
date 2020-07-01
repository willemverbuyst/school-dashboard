import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectStudentId } from '../store/student/selectors';
// import PolarChart from '../components/charts/PolarChart';
// import BarChart from '../components/charts/BarChart';
// import LineChart from '../components/charts/LineChart';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

export default function Home() {
  const history = useHistory();
  const studentId = useSelector(selectStudentId);

  useEffect(() => {
    if (studentId) {
      history.push(`/students/${studentId}`);
    }

    // make same logic happen for teacher
  });

  return (
    <Layout>
      <Layout style={{ padding: '24px', minHeight: '92vh' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
          }}
        >
          {/* <Row justify="space-around">
            <Col>
              <div style={{ width: '35vw', height: '35vh' }}>
                <BarChart
                  labels={['Welcome', 'to', 'your', 'dashboard']}
                  color="#FF2694"
                  data={[80, 56, 67, 45]}
                />
              </div>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col>
              <div style={{ width: '35vw', height: '35vh' }}>
                <PolarChart
                  labels={['Please', 'log', 'in']}
                  color={['#B81D9D', '#D222E1', '#8F1CB8']}
                  data={[80, 56, 67]}
                />
              </div>
            </Col>
            <Col>
              <div style={{ width: '35vw', height: '35vh' }}>
                <LineChart
                  labels={['to', 'see', 'your', 'progress']}
                  color={['#A026FF']}
                  data={[45, 67, 56, 80]}
                />
              </div>
            </Col>
          </Row> */}
        </Content>
      </Layout>
    </Layout>
  );
}
