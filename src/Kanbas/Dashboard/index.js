import db from "../Database";
import { Link } from "react-router-dom";
//import index.css from CourseNavigation
import '../Courses/CourseNavigation/index.css';


function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1 style={{marginTop:'0px',marginLeft:'20px'}}>DASHBOARD</h1>
      <hr style={{marginTop:'0px',marginLeft:'20px'}}/>
      <h5 style={{marginTop:'0px',marginLeft:'20px'}}>Published Courses ({courses.length})</h5>
      <hr style={{marginTop:'0px',marginLeft:'20px'}}/>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: '16px'}}>
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div className="card mb-3" style={{width:'250px'}}>
              <img src="../../labs/a1/boston.jfif" className="card-img-top" alt="..." />
              <div className="card-body">
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
