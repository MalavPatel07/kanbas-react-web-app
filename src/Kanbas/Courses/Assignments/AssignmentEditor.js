import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import "../CourseNavigation/index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (

    <div class="col-lg-10"> 
                            <div class="center-frame">
                                
                                <div class="container-fluid" style={{ alignSelf: 'center' }}
>

                                <button type="button" class="student-view-1 float-end " style={{ padding: '14px', marginLeft: '20px' }}> 
                                <div>
                                <i class="fa fa-ellipsis-v " aria-hidden="true"></i>
                                </div>
                                </button>
                                <div className="float-end">
                                <i class="fa fa-check-circle m-2 float-end text-success" style={{padding: '5px'}} aria-hidden="true"> Published</i>
                                </div>
                                
                            </div>
                          </div>



                                
               
                           
        
        <hr/>
        <div class="container" style={{height: '75%',overflowY: 'scroll'}}>
          <div class="flex-fill">
            <div class="row">
    <div style={{padding: '5px'}}><label> Assignment Name </label></div>
   
    <div class="container" style={{padding: '5px'}} >
        <input value={assignment.title}
        class="form-control float-end"
               placeholder="Assignment Name" /></div>
    <div class="container" style={{padding: '5px'}}>
    <textarea class="form-control float-end h-20">This is the first assignment to build Kanbas</textarea></div>
    <div class="container-fluid" style={{width: '800px', alignItems: 'center'}}>
        <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
          
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
            <label>Points</label>
                                  </div>
          <div class="col-md-6">
            <input class="form-control" value="100" type="number" max="100" min="50" step="5" />
          </div>
        </div>



        <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
            
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
              <label>Assignment Group</label>
                                    </div>
            <div class="col-md-6">
                <select class="form-control ">
                    <option value="option1">Assignemnts</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
          </div>



          <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
            
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
               <label>Display Grade as</label>
                                    </div>
            <div class="col-md-6">
                <select class="form-control ">
                    <option value="option1">Points</option>
                    <option value="option2">Percentage</option>
                    <option value="option3">Complete/Incomplete</option>
                    </select>
            </div>
          </div>



          <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
              <label>Submission Type</label>
                                    </div>
            <div class="col-md-6">
                <select class="form-control ">
                    <option value="option1">Online</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    </select>                            </div>
          </div>


          <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
              <label>Online Entry Options</label>
                                    </div>
            <div class="col-md-6">
                <input class="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Text Entry</label>
        <br />
        <input class="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Website URL
        </label>
        <br />
        <input class="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label"> Media Recordings</label>
            
        
        <br />
        <input   class="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label"> Student Annotation</label>
            
        
        <br />
        <input class="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">File Uploads </label>                            </div>
          </div>



          <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
              <label>Submission Attempts</label>
                                    </div>
            <div class="col-md-6">
                <select class="form-control ">
                    <option value="option1">Unlimited</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    </select>                           </div>
          </div>



          <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
              <label>Plaigarism Review</label>
                                    </div>
            <div class="col-md-6">
                <select class="form-control ">
                    <option value="option1">None</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    </select>                            </div>
          </div>



          <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
              <label>Group Assignment</label>
                                    </div>
            <div class="col-md-6">
                <input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">This is a group assignment </label>
            </div>
          </div>



          <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
              <label>Peer Reviews</label>
                                    </div>
            <div class="col-md-6">
                <input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Require Peer Reviews </label>
            </div>
          </div>



<div class="row" style={{alignItems: 'center' ,paddingBottom: '10px',paddingTop: '10px'}} >
<div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
<label>Assign</label>
            </div>
<div class="col-md-6">
<label>Assign To</label><br />
<select class="form-control ">
<option value="option1">Everyone</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select> 
<div class="row" >
<div class="col-sm">
    <label>Due</label>
    </div>
</div>
<div class="row">
<div class="col-sm" style={{paddingRight: 20}}>
    <input type="date"
           id="text-fields-due"
            value="2021-01-01" />
            
    </div>
</div>
<div class="row" >
<div class="col-sm" style={{paddingRight: 20}}>
  <div><label>Available from</label>
</div>
<div class="col-sm" style={{paddingRight: 20}}>
 
    <input type="date"
      id="text-fields-due"
       value="2021-01-01" />
       <br />
    </div></div>
    

  <div class="col-sm">
    <div><label>Until</label>
    </div>
    
  
  <div class="col-sm" style={{paddingRight: 20}}>
   
    <input type="date"
      id="text-fields-due"
       value="2021-01-01" />
       <br />
</div>

</div>                           
</div>
<br />
<div class="w-100">
<button type="button" class="btn btn-secondary w-100">+ Add</button>
</div>


</div>


    </div>

</div> 
  <hr style={{paddingTop: '10px',marginInlineStart: '0px'}}/>  

  <div class="container" style={{alignSelf: 'center'}}>
 
 <div class="center-frame">
    <div style={{paddingTop: '10px'}}>
    <input class = "form-check-input" type="checkbox" id="textEntry" />
    </div>
    <div style={{paddingTop: '10px'}}>
    <label class="form-check-label" style={{width: 500, paddingLeft: '5px'}} > Notify users that this content has changed </label>
</div>
    
    <div class="container-fluid" style={{alignSelf: 'center'}}>
    
    <button onClick={handleSave}  type="button" class="btn btn-danger float-end" style={{marginLeft: '20px'}}>Save</button>
    
    <button onClick={handleSave} type="button" class="btn btn-secondary float-end">Cancel</button>
    
    </div>
</div>


</div>
<hr style={{paddingTop: '10px', paddingBottom: '10px', marginInlineStart: '0px'}}/>  



</div>
</div>
        
        </div>
        </div>
        
                  
                 
                
  






    
    
  );
}


export default AssignmentEditor;