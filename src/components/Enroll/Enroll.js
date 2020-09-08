import React from 'react';
import './Enroll.css';

const Enroll = (props) => {
    const enroll = props.selectCourse;
    const total = enroll.reduce((total, course) => total + course.balance, 0)
    return (
        <div className="col-md-6 ">
           <div className="enroll">
               <h1> Enroll Courses: {enroll.length} </h1>
               <h4>Price: {total} Tk </h4>
           </div>
          </div>
    );
};

export default Enroll;