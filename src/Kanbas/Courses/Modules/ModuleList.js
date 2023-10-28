import React,{useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  
  const dispatch = useDispatch();



  return (
    <ul className="list-group rounded-0" style={{marginLeft:'0px'}}>
      <li className="list-group-item">
      <input className="form-control w-25"
      value={module.name}
          onChange={(e) => dispatch(setModule({
            ...module, name: e.target.value }))}
        /> <br/>
        <button className="btn btn-success btn-sm float-end text-suc"
        onClick={() => dispatch(addModule({...module,course:courseId}))}>Add</button>
        <button className="btn btn-primary btn-sm float-end text-suc"
        onClick={() => dispatch(updateModule(module))}>Update</button>
        <textarea className="form-control w-25"
        value={module.description}
          onChange={(e) => dispatch(setModule({
            ...module, description: e.target.value }))}
        />
        
       
      </li>

      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <i className="fa fa-bars me-2" aria-hidden="true"></i>
             
             <i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i>
                              <i
                                class="fa fa-check-circle m-2 float-end text-success"
                                aria-hidden="true"
                              ></i>
                              <button className='btn btn-success btn-sm float-end' 
                                  onClick={() => dispatch(setModule(module))}>
                                  Edit
                              </button>

                                 <button className='btn btn-danger btn-sm float-end'
                                  onClick={() => dispatch(deleteModule(module._id))}>
                                  Delete
                                </button>

                              {module.name}: <br/>
             {module.description}
             {
                module.lessons && (
                    <ul className="list-group rounded-0" style={{marginLeft:'0px'}}>
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                  <i className="fa fa-bars me-2" aria-hidden="true"></i>   
                                    {lesson.name}
                                    {lesson.description}
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;