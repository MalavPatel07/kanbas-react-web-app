import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";
import '../../Courses/CourseNavigation/index.css';


function  EditProfile() {
    const navigate = useNavigate();
    const handleCS = () => {
        navigate(`/Kanbas/Account/Profile`);
      };

  return (
    <div class="col-lg-9 mt-4">                         
                            <div class="profile-logo-container">
                              <div class="profile-logo">
                                <i class="fa-solid fa-user fa-user-size" style={{color: '#727883'}}></i>
                              </div>
                              <div class="edit-container">
                                <button onClick={handleCS} class="btn btn-secondary rounded-1 flot-end"><i class="fa-solid fa-pencil"></i> Cancel Editing</button>
                            </div>
                            </div>
                            <div class="container">              
              <div class="flex-fill">
            <div>

            <h5>Name:*</h5>
            <div class="w-25">
                <input class="form-control" name="fullName" placeholder="Jose Annunziato" />
            </div>
            <br/>
            
          
            <h5>Pronouns:</h5>
            <div class="w-25">
                <div class="dropdown">
                    <select class="form-select">
                      <option selected>None</option>
                      <option value="1">Mr.</option>
                      <option value="2">Mrs.</option>
                      <option value="3">Dr.</option>
                   </select>

                  </div>
            </div>
           
            <br/>
         
            <h5>Title: </h5>
            <div class="w-25">
                <input class="form-control" value="" />
            </div>
            <br/>            
            <h4>Contact</h4>
            <div class="d-flex w-25">
                <label>No registered services, you can add some on the <a href="#">settings</a> page.</label>
            </div>

          
            <h4> Biography</h4>
            <div class="w-25">
                <textarea class ="form-control" cols="50" rows="5">Faculty,Software Engineer,AI,Space</textarea><br/>
            </div>
           
            <h4>Links</h4>

            <div class="w-25">
                <div class="row">
                    <div class="col-sm">
                        <h5>Title</h5>

                    </div>
                    <div class="col-sm">
                        <h5>URL</h5>

                    </div>
                </div>
                <div class="row">
                    <div class="col-5">
                        <input class="form-control" placeholder="YouTube" />

                    </div>
                    <div class="col-1">
                        <i class="fa-solid fa-arrow-right float-left pt-2 pl-2"></i>
                    </div>
                    <div class="col-5">
                        <input class="form-control" placeholder="https://youtube" />

                    </div>
                    <div class="col-1">
                        <i class="fa-solid fa-xmark float-left pt-2 pl-2 text-danger"></i>
                    </div>
                </div>
                <button type="button" class="btn btn-secondary rounded-1 mt-2">Add a new link</button>
                <br/>
                <br/>
                <hr/>
            </div>
         
           
            <div class="w-25">
                
                    <button onClick={handleCS} class="btn btn-danger rounded-1 float-end mt-1">Save Profile</button>
                
                
                    <button onClick={handleCS} class="btn btn-secondary rounded-1 float-end mt-1" style={{marginRight: '10px'}}>Cancel</button>
                
            </div>
            </div>
              </div>
                            </div>
                        </div>
   




  );
  }

  export default EditProfile;

