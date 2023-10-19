import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillInboxFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { SiObsstudio } from "react-icons/si";
import { DiCreativecommons } from "react-icons/di";
import { BiSolidHelpCircle } from "react-icons/bi";
import "./index.css";
import '../Courses/CourseNavigation/index.css';

function KanbasNavigation() {
  const { pathname } = useLocation(); // Initialize pathname using useLocation

  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className={`wd-icon ${pathname.includes("Account") ? "black-icon" : ""}`} />,
    Dashboard: <RiDashboard3Fill className="wd-icon" style={{ color: 'red' }} />,
    Courses: <FaBook className="wd-icon" style={{ color: 'red' }} />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" style={{ color: 'red' }} />,
    Inbox: <BsFillInboxFill className="wd-icon" style={{ color: 'red' }} />,
    History: <FaHistory className="wd-icon" style={{ color: 'red' }} />,
    Studio: <SiObsstudio className="wd-icon" style={{ color: 'red' }} />,
    Commons: <DiCreativecommons className="wd-icon" style={{ color: 'red' }} />,
    Help: <BiSolidHelpCircle className="wd-icon" style={{ color: 'red' }} />,
  };

  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
      <a
        href="https://www.northeastern.edu/"
        className="list-group-item fs-1 text-danger" target="_blank">
        <img src="https://i.pinimg.com/originals/08/bd/47/08bd47b365a7ad4ed868352014ecbd48.png" alt="Northeastern University Logo" width="50" height="50"></img>
      </a>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) ? "active" : ""}`}>
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
