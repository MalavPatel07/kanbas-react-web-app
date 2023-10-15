import { useNavigate } from "react-router-dom";
import React from "react";
import '../../Courses/CourseNavigation/index.css';


function  Profile() {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/Kanbas/Account/EditProfile`);
      };


  return (

        <div class="col-lg-9">
                           
                            <div class="profile-logo-container">
                              <div class="profile-logo">
                                <i class="fa-solid fa-user fa-user-size" style={{color: '#727883'}}></i>
                              </div>
                              <div class="edit-container">
                                <button onClick={handleEdit} class="btn btn-secondary rounded-1"><i class="fa-solid fa-pencil"></i> Edit Profile</button>
                            </div>
                            </div>
                            <div class="col-lg-5">
                              <h3>Jose Annuziato</h3>
                                
                                <h4> Contact</h4>
                                <label>No registered services,you can add some on the <a href="#">settings</a> page.</label>
                                <br /> <br />
                                <h4>Biography</h4>
                    
                                <label>Faculty,Software Engineer,AI,Space</label>
                                <br /><br />
                                <h4>Links</h4>
                                <i class="fa-solid fa-link"></i>
                    
                                <a href="https://www.youtube.com/@WebDevTV">YouTube</a>
                                <i class="fa-solid fa-arrow-right-from-bracket" style={{color: '#ff2600'}}></i>
                            </div>              
                        </div>
  );
}

export default Profile;