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
              <img src="/images/react.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. 
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
