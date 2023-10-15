import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../CourseNavigation/index.css"


function AssignmentItem({ assignment }) {
  const { courseId } = useParams();

  return (
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
        <div class="inner-div" style={{fontSize: '15'}}>
        <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                style={{color: 'black'}}
              >
                {assignment.title}
              </Link>
        </div>
      </div>
      <div class="col">
        <div class="inner-div" style={{fontSize: '12'}}>
            <a href="#"  style={{color: 'black'}}>Multiple Modules | </a> 
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

    


  );}

  export default AssignmentItem;