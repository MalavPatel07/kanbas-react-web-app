import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import AssignmentItem from "./AssignmentItem";
import "../CourseNavigation/index.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

    function Assignments() {
        const { courseId } = useParams();
        const assignments = db.assignments;
        const courseAssignments = assignments.filter(
          (assignment) => assignment.course === courseId);
          const navigate = useNavigate();
          const handleEdit = () => {
            navigate(`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`);
          };

  return (

    <div class="col-lg-10">
                            <div class="center-frame">
                                <input class="form-control w-25 me-5" placeholder="Search for Assignments" />

                               
                                <div class="container-fluid" style={{alignSelf: 'center'}}>
                                    
                                <button type="button" class="student-view-1 float-end " style={{padding: '14px', marginLeft: '20px'}}> <i class="fa fa-ellipsis-v " aria-hidden="true"></i></button>
                                <button onClick={handleEdit} type="button" class="student-view-1 float-end  " style={{backgroundColor: 'red', color: 'white', marginLeft: '20px'}}><i class="fa fa-plus mr-1" aria-hidden="true"></i> 
                                Assignment
                                </button>
                                <button type="button" class="student-view-1 float-end "><i class="fa fa-plus mr-1" aria-hidden="true"></i> Group </button>
                                
                                </div>
                            </div>
               
                            
        
        <hr />



  <div class="mt-4">
    <ul class="list-group rounded-0">
      <li class="list-group-item list-group-item-secondary">
        <i class="fa fa-bars me-2" aria-hidden="true" style={{paddingTop: '10px'}}></i>
        <i class="fa fa-solid fa-caret-up fa-rotate-180" ></i>
        
        Assignments
        
        
        
        <i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true" style={{paddingTop: '5px'}}></i>
        <i class="fa fa-plus m-2 float-end" aria-hidden="true" style={{paddingTop: '5px'}}></i>
        <i class="oval-textbox float-end" aria-hidden="true">
            <p>40% of total</p>
        </i>
        
      </li>

  

{courseAssignments.map((assignment) => (
          <AssignmentItem key={assignment._id} assignment={assignment} />
        ))}

        {/* <AssignmentItem/> */}


  </ul>
  </div>


<div class="mt-5">
<ul class="list-group rounded-0">
<li class="list-group-item list-group-item-secondary">
<i class="fa fa-bars me-2" aria-hidden="true" style={{paddingTop: '10px'}}></i>
<i class="fa fa-solid fa-caret-up fa-rotate-180" ></i>

Quizzes



<i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true" style={{paddingTop: '5px'}}></i>
<i class="fa fa-plus m-2 float-end" aria-hidden="true" style={{paddingTop: '5px'}}></i>
<i class="oval-textbox float-end" aria-hidden="true">
    <p>10% of total</p>
</i>

</li>



<li class="list-group-item">
<div class="container2">
    <div class="row">
      <div class="col-lg-1">
        <div class="inner-div">
            <i class="fa fa-bars me-2" aria-hidden="true"></i>
            <i class="fa fa-solid fa-clipboard" style={{color: '#35b65b'}}></i>                                             </div>
      </div>
     
      <div class="col">
      <div class="col">
        <div class="inner-div" 
         style={{fontSize: 15}}>
            <a href="/kanbas/courses/assignments/edit-assignment/edit.html" style={{color: 'black'}}>Q1 - HTML</a>
        </div>
      </div>
      <div class="col">
        <div class="inner-div" style={{fontSize: 12}}>
            <a href="#" style={{color: 'black'}} >Multiple Modules | </a> 
        </div>
      </div>
     <div class="col">
      <div class="inner-div" style={{fontSize: 12}}>
        <label style={{fontWeight: 'bold'}}>Due</label> Sep 10 at 11:59pm | 100 points
      </div>
    </div>
    </div>
    <div class="col-lg-1">
        <div class="inner-div">
            <i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i><i
            class="fa fa-check-circle m-2 float-end text-success"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      </div>
  </div>
</li>


<li class="list-group-item">
<div class="container2">
<div class="row">
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-bars me-2" aria-hidden="true"></i>
<i class="fa fa-solid fa-clipboard" style={{color: '#35b65b'}}></i>                                             </div>
</div>

<div class="col">
<div class="col">
<div class="inner-div"  style={{fontSize: 15}}>
<a href="/kanbas/courses/assignments/edit-assignment/edit.html" style={{color: 'black'}}>Q2 - CSS</a>
</div>
</div>
<div class="col">
<div class="inner-div" style={{fontSize: 12}}>
<a href="#" style={{color: 'black'}}>Multiple Modules | </a> 
</div>
</div>
<div class="col">
<div class="inner-div" style={{fontSize: 12}}>
<label style={{fontWeight: 'bold'}}>Due</label> Sep 10 at 11:59pm | 100 points
</div>
</div>
</div>
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i><i
class="fa fa-check-circle m-2 float-end text-success"
aria-hidden="true"
></i>
</div>
</div>
</div>
  </div>
</li>

<li class="list-group-item">
<div class="container2">
<div class="row">
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-bars me-2" aria-hidden="true"></i>
<i class="fa fa-solid fa-clipboard"style={{color: '#35b65b'}}></i>                                             </div>
</div>

<div class="col">
<div class="col">
<div class="inner-div"  style={{fontSize: 15}}>
<a href="/kanbas/courses/assignments/edit-assignment/edit.html" style={{color: 'black'}}>Q3 - JS,ES6</a>
</div>
</div>
<div class="col">
<div class="inner-div" style={{fontSize: 12}}>
<a href="#" style={{color: 'black'}}>Multiple Modules | </a> 
</div>
</div>
<div class="col">
<div class="inner-div" style={{fontSize: 12}}>
<label style={{fontWeight: 'bold'}}>Due</label> Sep 10 at 11:59pm | 100 points
</div>
</div>
</div>
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i><i
class="fa fa-check-circle m-2 float-end text-success"
aria-hidden="true"
></i>
</div>
</div>
</div>
  </div>
</li>

<li class="list-group-item">
<div class="container2">
<div class="row">
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-bars me-2" aria-hidden="true"></i>
<i class="fa fa-solid fa-clipboard" style={{color: '#35b65b'}}></i>                                             </div>
</div>

<div class="col">
<div class="col">
<div class="inner-div"  style={{fontSize: 15}}>
<a href="/kanbas/courses/assignments/edit-assignment/edit.html" style={{color: 'black'}}>Q4 - NODE</a>
</div>
</div>
<div class="col">
<div class="inner-div" style={{fontSize: 12}}>
<a href="#" style={{color: 'black'}}>Multiple Modules | </a> 
</div>
</div>
<div class="col">
<div class="inner-div"style={{fontSize: 12}}>
<label style={{fontWeight: 'bold'}}>Due</label> Sep 10 at 11:59pm | 100 points
</div>
</div>
</div>
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i><i
class="fa fa-check-circle m-2 float-end text-success"
aria-hidden="true"
></i>
</div>
</div>
</div>
  </div>
</li>


<li class="list-group-item">
<div class="container2">
<div class="row">
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-bars me-2" aria-hidden="true"></i>
<i class="fa fa-solid fa-clipboard" style={{color: '#35b65b'}}></i>                                             </div>
</div>

<div class="col">
<div class="col">
<div class="inner-div" style={{fontSize: 15}}>
<a href="/kanbas/courses/assignments/edit-assignment/edit.html" style={{color: 'black'}}>Q5 - MONGO</a>
</div>
</div>
<div class="col">
<div class="inner-div" style={{fontSize: 12}}>
<a href="#" style={{color: 'black'}}>Multiple Modules | </a> 
</div>
</div>
<div class="col">
<div class="inner-div" style={{fontSize: 12}}>
<label style={{fontWeight: 'bold'}}>Due</label> Sep 10 at 11:59pm | 100 points
</div>
</div>
</div>
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i><i
class="fa fa-check-circle m-2 float-end text-success"
aria-hidden="true"
></i>
</div>
</div>
</div>
  </div>
</li>
</ul>
</div>



<div class="mt-5">
<ul class="list-group rounded-0" >
<li class="list-group-item list-group-item-secondary">
<i class="fa fa-bars me-2" aria-hidden="true" style={{paddingTop: '10px'}}></i>
<i class="fa fa-solid fa-caret-up fa-rotate-180" ></i>

EXAMS



<i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true" style={{paddingTop: '5px'}}></i>
<i class="fa fa-plus m-2 float-end" aria-hidden="true" style={{paddingTop: '5px'}}></i>
<i class="oval-textbox float-end" aria-hidden="true">
    <p>20% of total</p>
</i>

</li>




<li class="list-group-item">
    <div class="container2">
    <div class="row">
      <div class="col-lg-1">
        <div class="inner-div">
            <i class="fa fa-bars me-2" aria-hidden="true"></i>
            <i class="fa fa-solid fa-clipboard" style={{color: '#35b65b'}}></i>                                             </div>
      </div>
     
      <div class="col">
      <div class="col">
        <div class="inner-div"  style={{fontSize: 15}}>
            <a href="/kanbas/courses/assignments/edit-assignment/edit.html" style={{color: 'black'}}>Midterm</a>
        </div>
      </div>
      <div class="col">
        <div class="inner-div" style={{fontSize: 12}}>
            <a href="#" style={{color: 'black'}}>Multiple Modules | </a> 
        </div>
      </div>
     <div class="col">
      <div class="inner-div" style={{fontSize: 12}}>
       <label style={{fontWeight: 'bold'}}>Due</label> Sep 10 at 11:59pm | 100 points
      </div>
    </div>
    </div>
    <div class="col-lg-1">
        <div class="inner-div">
            <i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i><i
            class="fa fa-check-circle m-2 float-end text-success"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      </div>
  </div>
</li>



<li class="list-group-item">
<div class="container2">
<div class="row">
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-bars me-2" aria-hidden="true"></i>
<i class="fa fa-solid fa-clipboard" style={{color: '#35b65b'}}></i>                                             </div>
</div>

<div class="col">
<div class="col">
<div class="inner-div"  style={{fontSize: 15}}>
<a href="/kanbas/courses/assignments/edit-assignment/edit.html" style={{color: 'black'}}>Final</a>
</div>
</div>
<div class="col">
<div class="inner-div" style={{fontSize: 12}}>
<a href="#" style={{color: 'black'}}>Multiple Modules | </a> 
</div>
</div>
<div class="col">
<div class="inner-div" style={{fontSize: 12}}>
<label style={{fontWeight: 'bold'}}>Due</label> Sep 10 at 11:59pm | 100 points
</div>
</div>
</div>
<div class="col-lg-1">
<div class="inner-div">
<i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i><i
class="fa fa-check-circle m-2 float-end text-success"
aria-hidden="true"
></i>
</div>
</div>
</div>
  </div>
</li>
</ul>
</div>




<div class="mt-5">
<ul class="list-group rounded-0" >
<li class="list-group-item list-group-item-secondary">
<i class="fa fa-bars me-2" aria-hidden="true" style={{paddingTop: '10px'}}></i>
<i class="fa fa-solid fa-caret-up fa-rotate-180" ></i>

PROJECT



<i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true" style={{paddingTop: '5px'}}></i>
<i class="fa fa-plus m-2 float-end" aria-hidden="true" style={{paddingTop: '5px'}}></i>
<i class="oval-textbox float-end" aria-hidden="true">
    <p>20% of total</p>
</i>

</li>



<li class="list-group-item" style={{
    marginBottom: '40px'}}>
<div class="container2">
    <div class="row">
      <div class="col-lg-1">
        <div class="inner-div">
            <i class="fa fa-bars me-2" aria-hidden="true"></i>
            <i class="fa fa-solid fa-clipboard" style={{color: '#35b65b'}}></i>                                             </div>
      </div>
     
      <div class="col">
      <div class="col">
        <div class="inner-div"  style={{fontSize: 15}}>
            <a href="/kanbas/courses/assignments/edit-assignment/edit.html">Project</a>
        </div>
      </div>
      <div class="col">
        <div class="inner-div" style={{fontSize: 12}}>
            <a href="#">Multiple Modules | </a> 
        </div>
      </div>
     <div class="col">
      <div class="inner-div"style={{fontSize: 12}}>
        <label style={{fontWeight: 'bold'}}>Due</label> Sep 10 at 11:59pm | 100 points
      </div>
    </div>
    </div>
    <div class="col-lg-1">
        <div class="inner-div">
            <i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i><i
            class="fa fa-check-circle m-2 float-end text-success"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      </div>
  </div>
</li>
</ul>
</div>
{/* </div> */}

       
      </div>
  );
}
export default Assignments;