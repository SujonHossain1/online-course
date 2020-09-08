import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data/data.json'
import Course from './components/Course/Course';
import Header from './components/Header/Header';
import Enroll from './components/Enroll/Enroll';

function App() {
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);

  useEffect(() => {
    setCourses(data);
  }, []);

  const handleAddCourse = (course) => {
    const newCourse = [...selectCourse, course];
    setSelectCourse(newCourse);
  }

  

  return (
    <div className="App">
      <header id="enroll" style={{borderBottom: '3px solid salmon'}} className="jumbotron">
       <div className="container">
       <div className="row my-3">
          <Header />
          <Enroll selectCourse = {selectCourse} />
        </div>
       </div>
      </header>

      <div className="container">
        <div className="row">
          {
            courses.map(course => <Course
              key={course.id}
              course={course}
              handleAddCourse={handleAddCourse}
            />)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
