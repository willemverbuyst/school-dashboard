import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentForOverview } from '../../../store/overviewTeacher/actions';
import { selectStudentOverview } from '../../../store/overviewTeacher/selectors';
import {
  selectTeacherSubjects,
  selectTeacherToken,
} from '../../../store/teacher/selectors';
import { Layout } from 'antd';
import BarChartTestsStudent from './BarChartTestsStudents';
import DoughnutChartStudent from './DoughnutChartStudents';
const { Content } = Layout;

export default function TeacherStudentDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectTeacherToken);
  const { studentid } = useParams();
  const results = useSelector(selectStudentOverview);
  const subjects = useSelector(selectTeacherSubjects);

  useEffect(() => {
    if (token === null) {
      history.push('/');
    }
  });

  useEffect(() => {
    dispatch(getStudentForOverview(studentid));
  }, [dispatch, studentid]);

  return (
    <Layout>
      <Layout style={{ padding: '24px', minHeight: '92vh' }}>
        <Content className="site-layout-background">
          {results && subjects ? (
            <>
              <BarChartTestsStudent resutls={results} />
              <DoughnutChartStudent results={results} />
            </>
          ) : null}
        </Content>
      </Layout>
    </Layout>
  );
}
