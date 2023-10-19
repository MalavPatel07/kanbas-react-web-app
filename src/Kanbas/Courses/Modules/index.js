import ModuleList from "./ModuleList";
import "../CourseNavigation/index.css"
import '@fortawesome/fontawesome-free/css/all.min.css'


function Modules() {
  return (
    <div>
      {/* <h2>Modules</h2> */}
      <div class="p-2">
                        <div class="d-flex flex-wrap justify-content-end">
                        <div class="col-sm-auto">
                          <button class="btn btn-secondary">Collapse All</button>
                        </div>
                      <div class="col-sm-auto">
                        <button class="btn btn-secondary">View Progress</button>
                      </div>
                      
                      <div class="col-sm-auto">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-regular fa-circle-check" style={{color: '#1eff00'}}></i>
                            Publish All
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Publish Week 1</a>
                            <a class="dropdown-item" href="#">Publish Week 2</a>
                            <a class="dropdown-item" href="#">Publish Week 3</a>
                          </div>
                        </div>
                          
                      </div>
                      <div class="col-sm-auto">
                        <button class="btn btn-danger"><i class="fa fa-plus mr-1" aria-hidden="true"></i> Module</button>
                      </div>
                    </div>
                  </div>
                  <ul className="list-group rounded-0">
                  <li className="list-group-item list-group-item-secondary">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  Week 0
                  <i class="fa fa-ellipsis-v float-end m-2" aria-hidden="true"></i>
                              <i class="fa fa-plus m-2 float-end" aria-hidden="true"></i>
                              <i class="fa-solid fa-caret-up fa-rotate-180  m-2 float-end"></i>
                              <i
                                class="fa fa-check-circle m-2 float-end text-success"
                                aria-hidden="true"
                              ></i>
                </li>
                <ModuleList />
                  </ul>
    
    </div>
  );
}
export default Modules;