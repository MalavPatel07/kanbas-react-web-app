import ModuleList from "./ModuleList";
import "../CourseNavigation/index.css"



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
      <ModuleList />
    </div>
  );
}
export default Modules;