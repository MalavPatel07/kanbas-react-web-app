import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
//import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";

import '../Courses/CourseNavigation/index.css';
import AccountNavigation from "./AccountNavigation";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

function Account() {
  
  const {pathname} = useLocation();
  const [empty, kanbas, account,screen] = pathname.split("/");
 
  return (
    <div style={{width : 1300}}>
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
                                    <li class="breadcrumb-item" aria-current="page">{account}</li>
                                  <li class="breadcrumb-item active" aria-current="page">{screen}</li>
                                </ol>
                              </nav>
                           </div>
    

      </div>
      </div>
      <hr/>
      
      
      <div>
        <div className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}>
          <Routes>
            <Route path="/" element={<Navigate to="Profile" />} />
            <Route path="Profile" element={<Profile/>} />
            <Route path="EditProfile" element={<EditProfile/>} />
        
          </Routes>
        </div>
      </div>
      <AccountNavigation />
    </div>
    

    
  );
}

export default Account;