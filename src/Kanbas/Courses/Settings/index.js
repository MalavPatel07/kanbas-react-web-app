import { Link,Route,Routes } from "react-router-dom";
import CourseSettings from "./CourseSettings";
import CourseNavigation from "./CourseNavigation";





function Settings() {


 return (
    <div>    
   <nav className="nav nav-tabs mt-2">
     <Link className="nav-link" to="../Settings/CourseSettings">Course Settings</Link>
     <Link className="nav-link" to="../Settings/CourseNavigation">Course Navigation</Link>
   </nav>
    
    <Routes>
        <Route path="CourseSettings" element={<CourseSettings/>} />
        <Route path="CourseNavigation" element={<CourseNavigation/>} />
    </Routes>
    </div>
 );
}
export default Settings;