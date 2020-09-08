import React from 'react';
import './Course.css';

const Course = ({ course, course: { title, balance, picture, about, email }, handleAddCourse }) => {
    return (
        <div className="col-md-4 mx-auto  ">
            <div className="course">
                <figure>
                    <img src={picture} alt={title} />
                </figure>

                <h5> {title} </h5>
                <p>{about} </p>
                <p><strong> Price: {balance} Tk </strong></p>
                <p> <a href={"mailto:" + email} target="_new" > Email: {email} </a> </p>
                <a href="#enroll" onClick={() => handleAddCourse(course)} className="btn btn-success">Enroll Now</a>
            </div>
        </div>
    );
};

export default Course;