import db from "../../Database";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";
import "../CourseNavigation/index.css";


function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
   

      <div class="col-lg-10">
        <div class="flex-fill">
            <div class="center-frame">
                <div class="container-fluid" style={{alignSelf: 'center'}}>
                    
                    
                <button type="button" class="btn btn-light float-end " style={{padding: '10px', marginLeft: '20px'}}><i class="fa-solid fa-gear"></i></button>
                
                <div class="dropdown">
                    <button type="button" class="btn btn-light dropdown-toggle rounded-1 float-end" style={{marginLeft: '20px'}} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa-solid fa-file-export"></i> Export
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                
                
                <button type="button" class="btn btn-light float-end" style={{paddingLeft: '20px'}}><i class="fa-solid fa-file-import"></i> Import</button>
            </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm">
                        <h5>Student Names</h5>
                    </div>
                    <div class="col-sm">
                        <h5>Assignment Names</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <div class="w-75">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle rounded-1 text-start" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa-solid fa-magnifying-glass" style={{paddingRight: '10px'}}></i>
                                    <label style={{paddingRight: '350px'}}>Search Students</label>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                              </div>

                        </div>
                        
                    </div>
                    <div class="col-sm">
                        <div class="w-75">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle rounded-1 text-start" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa-solid fa-magnifying-glass" style={{paddingRight: '10px'}}></i>
                                    <label style={{paddingRight: '330px'}}>Search Assignments</label>
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                  </div>
                            </div>
                            

                        </div>
                        
                        </div>
                    </div>
                </div>

            </div>
            

            
            <br />
            <div class="">
                <button type="button" class="btn btn-secondary rounded-1"><i class="fa-solid fa-filter" style={{paddingRight: '5px'}}></i>Apply Filters</button>
            </div>
            
            <br />
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
            <th scope="col">Student Name</th>
            {assignments.map((assignment) => (<th scope="col">{assignment.title}</th>))}
            </tr>
           
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>

      </div>  
      );
}
export default Grades;