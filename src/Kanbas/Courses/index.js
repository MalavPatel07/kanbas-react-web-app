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
import Settings from "./Settings";
import "./CourseNavigation/index.css"
import '@fortawesome/fontawesome-free/css/all.min.css'


function Courses({ courses }) {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  //const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = courses.find((course) => course._id === courseId);
  return (
    <div  style={{width : 1300}}>
      {/* <h1>Courses {course.name} / {screen}</h1> */}
    <div class="row-sidebar" style={{width : '100%'}}>
    <div class="Profile-container d-none d-sm-block">
      <div class="hamburger-icon d-none d-sm-block">&#9776;</div>
      </div>
  
              
      <div class="Profile-container">
                           <div class="text-container">
                            <nav aria-label="breadcrumb"  class="w-100">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Courses</a></li>
                                  <li class="breadcrumb-item"><a href="#">{course.name}</a></li>
                                  {/* <li class="breadcrumb-item active" aria-current="page">{screen}</li> */}
                                </ol>
                              </nav>
                           </div>
    
                         
      </div>
   
      </div> 
      <hr style={{marginTop:'0px',marginLeft:'20px'}}/>
    
      
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "80px",
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
            <Route path="Settings/*" element={<Settings/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;