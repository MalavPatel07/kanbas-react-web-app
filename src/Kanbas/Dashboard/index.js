import db from "../Database";
import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
//import index.css from CourseNavigation
import '../Courses/CourseNavigation/index.css';
import axios from "axios";


function Dashboard() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URl = `${API_BASE}/api/courses`;
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const fetchCourse = async () => {
    const response = await axios.get(`${URl}`);
    setCourses(response.data);
  };


  const deleteCourse = async (id) => {
    const response = await axios.delete(`${URl}/${id}`);
    setCourses(courses.filter((c) => c._id !== id));
  };

  const addNewCourse = async () => {
    const response = await axios.post(`${URl}`, course); 
    setCourses([...courses, response.data]);
  };
  

  const updateCourse = async () => {
    try {
      console.log(course._id);
      const response = await axios.put(`${URl}/${course._id}`, course);
      setCourses(courses.map((c) => (c._id === course._id ? course : c)));
      setCourse({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  //   const response = await axios.put(`${URl}/${course._id}`, course);
  //   setCourses(courses.map((c) => (c._id === course._id ? course : c)));
  //   setCourse({});
  // };
  

    useEffect(() => { fetchCourse(); }, []);

  
  
  return (
    <div>
      <h1 style={{marginTop:'0px',marginLeft:'20px'}}>DASHBOARD</h1>
      <hr style={{marginTop:'0px',marginLeft:'20px'}}/>
      
      
      <h5 style={{marginTop:'0px',marginLeft:'20px'}}>Published Courses ({courses.length})</h5>
      
      <hr style={{marginTop:'0px',marginLeft:'20px'}}/>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <h5 style={{marginTop:'0px',marginLeft:'20px'}}>Course</h5>
      <h6 style={{marginTop:'0px',marginLeft:'20px'}}>Course Name</h6>
      <input
        value={course.name}
        placeholder="Course Name"
        className="form-control w-25"
        style={{marginTop:'0px',marginLeft:'20px'}}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <h6 style={{marginTop:'0px',marginLeft:'20px'}}>Course Number</h6>
      <input
        value={course.number}
        placeholder="Course Number"
        className="form-control w-25"
        style={{marginTop:'0px',marginLeft:'20px'}}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <h6 style={{marginTop:'0px',marginLeft:'20px'}}>Course Start Date</h6>
      <input
        value={course.startDate}
        className="form-control w-25"
        style={{marginTop:'0px',marginLeft:'20px'}}
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <h6 style={{marginTop:'0px',marginLeft:'20px'}}>Course End Date</h6>
      <input
        value={course.endDate}
        className="form-control w-25"
        style={{marginTop:'0px',marginLeft:'20px'}}
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <br />
      <button style={{marginTop:'0px',marginLeft:'20px'}} className="btn btn-primary btn-sm" 
      onClick={updateCourse}>Update</button>

      <button style={{marginTop:'0px',marginLeft:'10px'}} className="btn btn-success btn-sm" 
      onClick={addNewCourse}>Add</button>
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: '16px'}}>
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div className="card mb-3 mr-3" style={{width:'250px',marginRight:'150px'}}>
              <img src="../../labs/a1/boston.jfif" className="card-img-top" alt="..." />
              <div className="card-body">
              <button className="btn btn-warning btn-sm float-end"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button> 
                <button className="btn btn-danger btn-sm float-end"
                  onClick={() => {
                    deleteCourse(course._id);
                  }
                  }
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
