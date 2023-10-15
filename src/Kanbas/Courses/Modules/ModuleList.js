import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import '@fortawesome/fontawesome-free/css/all.min.css'


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group rounded-0" style={{marginLeft:'0px'}}>
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <i className="fa fa-bars me-2" aria-hidden="true"></i>
             {module.name}
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