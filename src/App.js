import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import BarAtTheTop from './components/BarAtThetop';
import AlertBox from './components/AlertBox';
import Spinner from './components/Spinner';
import Sidebar from './components/Sidebar';
import Home from './pages/home/';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentMainPage from './pages/student/StudentMainPage';
import StudentDoTest from './pages/student/StudentDoTest';
import StudentSubjectDetails from './pages/student/StudentSubjectDetails';
import TeacherMainPage from './pages/teacher/TeacherMainPage';
import TeacherStudentDetails from './pages/teacher/TeacherStudentDetails';
import TeacherSubjectDetails from './pages/teacher/TeacherSubjectDetails';
import AddQuestionForm from './pages/teacher/AddQuestionForm';
import ListOfQuestions from './pages/teacher/ListOfQuestions';
import { selectAppLoading } from './store/appState/selectors';
import { selectTeacherToken } from './store/teacher/selectors';
import { getStudentWithStoredToken } from './store/student/actions';
import { getTeacherWithStoredToken } from './store/teacher/actions';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const teacherToken = useSelector(selectTeacherToken);

  useEffect(() => {
    if (teacherToken) {
      dispatch(getTeacherWithStoredToken());
    } else {
      dispatch(getStudentWithStoredToken());
    }
  }, [dispatch, teacherToken]);

  return (
    <div>
      <BarAtTheTop />
      <AlertBox />
      <Layout>
        <Sidebar />
        {isLoading ? <Spinner /> : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/students/:studentid"
            component={StudentMainPage}
          />
          <Route
            exact
            path="/students/:studentid/subjects/:subjectid"
            component={StudentSubjectDetails}
          />
          <Route
            exact
            path="/students/:studentid/subjects/:subjectid/test"
            component={StudentDoTest}
          />
          <Route
            exact
            path="/teachers/:teacherid"
            component={TeacherMainPage}
          />
          <Route
            exact
            path="/teachers/:teacherid/students/:studentid"
            component={TeacherStudentDetails}
          />
          <Route
            exact
            path="/teachers/:teacherid/subjects/:subjectid"
            component={TeacherSubjectDetails}
          />
          <Route
            exact
            path="/teachers/:teacherid/questions/add"
            component={AddQuestionForm}
          />
          <Route
            exact
            path="/teachers/:teacherid/questions/list"
            component={ListOfQuestions}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
