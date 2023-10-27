import db from "../Database";
import { Link } from "react-router-dom";
import { React, useState } from "react";
//import index.css from CourseNavigation
import '../Courses/CourseNavigation/index.css';


function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  //const courses = db.courses;
  return (
    <div>
      <h1 style={{marginTop:'0px',marginLeft:'20px'}}>DASHBOARD</h1>
      <hr style={{marginTop:'0px',marginLeft:'20px'}}/>
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button onClick={updateCourse}>Update</button>

      <button onClick={addNewCourse}>Add</button>
      <hr />
      <h5 style={{marginTop:'0px',marginLeft:'20px'}}>Published Courses ({courses.length})</h5>
      <hr style={{marginTop:'0px',marginLeft:'20px'}}/>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: '16px'}}>
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div className="card mb-3" style={{width:'250px'}}>
              <img src="../../labs/a1/boston.jfif" className="card-img-top" alt="..." />
              <div className="card-body">
              <button
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  style={{color:'red',textDecoration: 'none'}}
                >
                  {course.name} <br/>
                  Start Date: {course.startDate}<br/>
                  <i class="fas fa-arrow-right-from-bracket"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
