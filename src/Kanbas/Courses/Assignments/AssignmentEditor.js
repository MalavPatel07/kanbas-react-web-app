import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import db from "../../Database";
import "../CourseNavigation/index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import assignmentReducer from "./assignmentReducer";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment,setAssignments1 } from "./assignmentReducer";
import { updateAssignmentForCourse,addAssignmentForCourse,findAssignmentById } from "./client";


function AssignmentEditor() {

  const { assignmentId } = useParams();
  // console.log(assignmentId)
  

  // const assignment = useSelector((state) => state.assignmentReducer.assignment);
  // const assignments = useSelector((state) => state.assignmentReducer.assignments);

  const [assignments, setAssignments] = useState([]);
  const[assignment,setAssignment] = useState([]);

  const handleFetchAssignmentByID = async () => {
    const response = await findAssignmentById(assignmentId);
    setAssignment(response);
  };

  useEffect(() => {
    if (assignmentId !== "AssignmentEditor") {
      handleFetchAssignmentByID();
    }
    
  }, [assignmentId]);
  


  let assignmentTitle;
  let due;
  let description;
  let availableFromDate;
  let availableUntilDate;
  let points;
  if (assignmentId !== "AssignmentEditor") {
    assignmentTitle = assignment.title;
    due = assignment.due;
    availableFromDate = assignment.availableFromDate;
    availableUntilDate = assignment.availableUntilDate;
    description = assignment.description;
    points = assignment.point;
  } 

  



  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdateAssignment = async () => {
    const status = await updateAssignmentForCourse(assignment);
    dispatch(updateAssignment(assignment));
    setAssignments(assignments.map((a) => (a._id === assignment._id ? assignment : a)));
  };


  const handleAddAssignment = async () => {
    const newAssignment = await addAssignmentForCourse(courseId, assignment);
    dispatch(addAssignment(newAssignment));
    setAssignments(assignments => [...assignments, newAssignment]);
  };

  const handleSave = () => {
    if (assignmentId === "AssignmentEditor") {
   
      //dispatch(addAssignment({...assignment,course:courseId}));
      {handleAddAssignment()}
    } else {
    
      // console.log(assignment.title)
      //dispatch(updateAssignment(assignment));
       {handleUpdateAssignment()}
      
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };


  const handleCancel = () => {

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
        <input 
        value={assignmentTitle}
        onChange={(e) => {
        
            setAssignment({
              ...assignment,
              title: e.target.value,
            })
          
        }}
        class="form-control float-end"
               placeholder="Assignment Name" 
               /></div>
    <div class="container" style={{padding: '5px'}}>
    <textarea class="form-control float-end h-20"
    onChange={(e) => {
      
        setAssignment({
          ...assignment,
          description: e.target.value,
        })
      
    }}
    
    >{assignment.description}</textarea></div>
    <div class="container-fluid" style={{width: '800px', alignItems: 'center'}}>
        <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
          
            <div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
            <label>Points</label>
                                  </div>
          <div class="col-md-6">
            <input class="form-control" value={assignment.points} type="number" max="100" min="50" step="5"
            onChange={(e) => {
              
                setAssignment({
                  ...assignment,
                  points: e.target.value,
                })
              
            }} 
            
            />
          </div>
        </div>

<div class="row" style={{alignItems: 'center' ,paddingBottom: '10px',paddingTop: '10px'}} >
<div class="col-md-6" style={{textAlign: 'end',paddingRight: '20px'}}>
<label>Assign</label>
            </div>
<div class="col-md-6">

<div class="row" >
<div class="col-sm">
    <label>Due</label>
    </div>
</div>
<div class="row">
<div class="col-sm" style={{paddingRight: 20}}>
    <input type="date"
           id="text-fields-due"
            value={due} 
            onChange={(e) => {
              
                setAssignment({
                  ...assignment,
                  due: e.target.value,
                })
              
            }}
            
            />
            
    </div>
</div>
<div class="row" >
<div class="col-sm" style={{paddingRight: 20}}>
  <div><label>Available from</label>
</div>
<div class="col-sm" style={{paddingRight: 20}}>
 
    <input type="date"
      id="text-fields-due"
       value={availableFromDate}
       onChange={(e) => {
        
          setAssignment({
            ...assignment,
            availableFromDate: e.target.value,
          })
        
      }}
        
       
       />
       <br />
    </div></div>
    

  <div class="col-sm">
    <div><label>Until</label>
    </div>
    
  
  <div class="col-sm" style={{paddingRight: 20}}>
   
    <input type="date"
      id="text-fields-due"
       value={availableUntilDate}
       onChange={(e) => {
        
          setAssignment({
            ...assignment,
            availableUntilDate: e.target.value,
          })
        
      }} 
       
       />
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
    
    <button onClick={handleCancel} type="button" class="btn btn-secondary float-end">Cancel</button>
    
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