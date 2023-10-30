import React from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../CourseNavigation/index.css"
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "./assignmentReducer";



function AssignmentItem() {
  const { courseId } = useParams();
  const { assignmentId } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector((state) => state.assignmentReducer.assignments);
  const assignment = useSelector((state) => state.assignmentReducer.assignment);


  const handleDeleteClick = () => {
    // let shouldDelete = window.confirm("Are you sure you want to remove the assignment?");
    // console.log(shouldDelete)
  
    if (window.confirm("Are you sure you want to remove the assignment?")) {
      //console.log(window.confirm("Are you sure you want to remove the assignment?"))
      dispatch(deleteAssignment(assignment._id));
      //navigate(`/Kanbas/Courses/${courseId}/Assignments`);
      
    }
  };
 
  return (

    <>
    {
      assignments.filter((assignment) => assignment.course === courseId).map((assignment, index) => (
        <li key={index} className="list-group-item">
         <i className="fa fa-bars me-2" aria-hidden="true"></i>
         <i class="fa fa-solid fa-clipboard" style={{color: '#35b65b'}}></i>
          
          <i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i>
                           <i
                             class="fa fa-check-circle m-2 float-end text-success"
                             aria-hidden="true"
                           ></i>
                          
                           <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                style={{color: 'black'}}
                onClick = {() => dispatch(setAssignment(assignment))}
              >
                {assignment.title}
              </Link>
              <button className='btn btn-outline-danger btn-sm float-end'
                              
                              onClick={() => 
                                {if (window.confirm("Are you sure you want to remove the assignment?")) {
                                  dispatch(deleteAssignment(assignment._id))}

                                }
                              }> 
                               Delete
                             </button>

                            <div class="col">
         <div class="inner-div" style={{fontSize: '12'}}>
             <a href="#"  style={{color: 'black'}}>Multiple Modules | </a> 
         </div>
       </div>
      <div class="col">
       <div class="inner-div" style={{fontSize: 12}}>
         <label style={{fontWeight: 'bold'}}>Due</label> {assignment.due} at 11:59pm | {assignment.points} points
       </div>
    </div>
        </li>
      ))
    }
    </>
    
//     <li class="list-group-item">
//     <div class="container2">
//     <div class="row">
//       <div class="col-lg-1">
//         <div class="inner-div">
//             <i class="fa fa-bars me-2" aria-hidden="true"></i>
//             <i class="fa fa-solid fa-clipboard" style={{color: '#35b65b'}}></i>                                             </div>
//       </div>

      
       
      
     
//       <div class="col">
//       <div class="col">
//         <div class="inner-div" style={{fontSize: '15'}}>
//         <Link
//                 to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
//                 style={{color: 'black'}}
//                 onClick = {() => dispatch(setAssignment(assignment))}
//               >
//                 {assignment.title}
//               </Link>
//               <button className="btn btn-outline-danger btn-sm float-end"
//                                   onClick={() => dispatch(deleteAssignment(assignment._id))}>
                                    
//                                   Delete
//                                 </button>
//         </div>
//       </div>
//       <div class="col">
//         <div class="inner-div" style={{fontSize: '12'}}>
//             <a href="#"  style={{color: 'black'}}>Multiple Modules | </a> 
//         </div>
//       </div>
//      <div class="col">
//       <div class="inner-div" style={{fontSize: 12}}>
//         <label style={{fontWeight: 'bold'}}>Due</label> Sep 10 at 11:59pm | 100 points
//       </div>
//     </div>
//     </div>
//     <div class="col-lg-1">
//         <div class="inner-div">
//             <i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i><i
//             class="fa fa-check-circle m-2 float-end text-success"
//             aria-hidden="true"
//           ></i>
//         </div>
//       </div>
//       </div>
// </div>
// </li>

    


  );
}

  export default AssignmentItem;