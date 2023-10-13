import db from "../Database";
import { Link } from "react-router-dom";
//import index.css from CourseNavigation
import '../Courses/CourseNavigation/index.css';


function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
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
