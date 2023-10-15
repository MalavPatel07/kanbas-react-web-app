import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza","Zoom Meetings","Assignments","Quizzes","Grades","People","Panopto Video","Discussions","Announcements","Pages","Files",
  "Rubrics","Outcomes","Syllabus","Course Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-navigation list-group" style={{ width: 150}}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbasas/Courses/${courseId}/${link}`}
          className={`list-unstyled ${pathname.includes(link) && "active"}` }style={{padding : 0}}
        >
          <li>{link}</li>
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;





