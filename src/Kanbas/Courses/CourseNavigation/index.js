import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'


function CourseNavigation() {
  const links = {
    "Home": "Home",
    "Modules": "Modules",
    "Piazza": "Piazza",
    "Zoom Meetings": "Zoom-Meetings",
    "Assignments": "Assignments",
    "Quizzes": "Quizzes",
    "Grades": "Grades",
    "People": "People",
    "Panopto Video": "Panopto-Video",
    "Discussions": "Discussions",
    "Announcements": "Announcements",
    "Pages": "Pages",
    "Files": "Files",
    "Rubrics": "Rubrics",
    "Outcomes": "Outcomes",
    "Syllabus": "Syllabus",
    "Course Settings": "Settings", 
  };

  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="wd-course-navigation list-group" style={{ width: 150 }}>
      {Object.keys(links).map((linkText, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${links[linkText]}`}
          className={`list-unstyled ${pathname.includes(links[linkText]) && "active"}`}
          style={{ padding: 0 }}
        >
          <li>{linkText}</li>
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;






