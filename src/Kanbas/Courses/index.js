import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
//import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./CourseNavigation/index.css"

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div class="w-100">
      {/* <h1>Courses {course.name} / {screen}</h1> */}
     
      <div class="Profile-container">
                           <div class="text-container">
                            <nav aria-label="breadcrumb"  class="w-100">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Courses</a></li>
                                  <li class="breadcrumb-item"><a href="#">{course.name}</a></li>
                                  <li class="breadcrumb-item active" aria-current="page">{screen}</li>
                                </ol>
                              </nav>
                           </div>
    

      </div>
      
      
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
      <CourseNavigation />
    </div>

    
  );
}

export default Courses;