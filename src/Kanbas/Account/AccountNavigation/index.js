import { Link, useParams, useLocation } from "react-router-dom";
import '../../Courses/CourseNavigation/index.css';

function AccountNavigation() {
  const links = ["Notifications","Profile","Files","Settings","EPortfolios","Shared Content","The Hub","Qwickly Course Tools","Global Announcements"];
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="wd-course-navigation list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Account/${link}`}
          className={`list-unstyled ${pathname.includes(link) && "active"}`}style={{padding : 0}}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default AccountNavigation;