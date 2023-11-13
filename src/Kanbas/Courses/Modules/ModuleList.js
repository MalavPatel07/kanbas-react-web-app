import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules1
} from "./modulesReducer";

import { findModulesForCourse,addModuleForCourse,deleteModuleForCourse,updateModuleForCourse } from "./client";



function ModuleList() {
  const { courseId } = useParams();
  // const modules = useSelector((state) => state.modulesReducer.modules);
  // const module = useSelector((state) => state.modulesReducer.module);
  
  const dispatch = useDispatch();

  const [modules, setModules] = useState([]);
  const [module,setModule] = useState([]);

  const fetchModules = async () => {
    const response = await findModulesForCourse(courseId);
    setModules(response);
  };

  const handleAddModule = async () => {
    const newModule = await addModuleForCourse(courseId, module);
    dispatch(addModule(newModule));
    //setModule([newModule, ...modules]);
    setModules(modules => [...modules, newModule]);
  };

  const handleDeleteModule = async(moduleId) => {
    await deleteModuleForCourse(moduleId);
    dispatch(deleteModule(moduleId));
    setModules(modules.filter((module) => module._id !== moduleId));
  };

  const handleUpdateModule = async () => {
    const status = await updateModuleForCourse(module);
    dispatch(updateModule(module));
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };




  


  useEffect(() => {
    fetchModules();
  }, [courseId]);  



  return (
    <ul className="list-group rounded-0" style={{marginLeft:'0px'}}>
      <li className="list-group-item">
      <input className="form-control w-25"
      value={module.name}
          onChange={(e) => setModule({
            ...module, name: e.target.value })}
        /> <br/>
        <button className="btn btn-success btn-sm float-end text-suc"
        onClick={handleAddModule}>Add</button>
        <button className="btn btn-primary btn-sm float-end text-suc"
        onClick={handleUpdateModule}>Update</button>
        <textarea className="form-control w-25"
        value={module.description}
          onChange={(e) => setModule({
            ...module, description: e.target.value })}
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
                                  onClick={() => setModule(module)}>
                                  Edit
                              </button>

                                 <button className='btn btn-danger btn-sm float-end'
                                  onClick={() => handleDeleteModule(module._id)}>
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