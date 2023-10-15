import ModuleList from "../Modules/ModuleList";
import '@fortawesome/fontawesome-free/css/all.min.css'

function Home() {
  return (
    <div className="row">
    <div className="col-lg-8">
                          <div className="row">
                            <div className="row row-cols-lg-auto g-3 float-end" style={{justifyContent : 'flex-end'}}>
                            <div className="col">
                              <button className="btn btn-secondary">Collapse All</button>
                            </div>
                            <div className="col">
                              <button className="btn btn-secondary">View Progress</button>
                            </div>
                            <div className="col">
                              <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Publish All
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <a className="dropdown-item" href="#">Publish Week 1</a>
                                  <a className="dropdown-item" href="#">Publish Week 2</a>
                                  <a className="dropdown-item" href="#">Publish Week 3</a>
                                </div>
                              </div>
                                
                            </div>
                            <div className="col">
                              <button className="btn btn-danger">+ Module</button>
                            </div>
                          </div>
                        </div>
<div className="container" >
          <div className="d-block">

      
          
            <div className="mt-4">
              <ul className="list-group rounded-0">
                <li className="list-group-item list-group-item-secondary">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  Week 0 - HTML
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  LEARNING OBJECTIVES
                </li>
                <ModuleList />
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i
                  ><span className="ms-4"> Intro to JavaScript</span>
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i> READING
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i> SLIDES
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  <a href="https://youtu.be/74_BnRx7Z9Y?si=vanjCQYXdwYJZO1t"
                    ><span className="ms-4">Intro to course</span></a
                  >
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  <span>Intro to HTML</span>
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i> Intro to CSS
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i> Intro to
                  JavaScript
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <ul className="list-group rounded-0">
                <li className="list-group-item list-group-item-secondary">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  Week 1 - HTML
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  LEARNING OBJECTIVES
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  <span className="ms-4">Intro to course</span>
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  <span className="ms-4">Intro to HTML</span>
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i
                  ><span className="ms-4"> Intro to CSS</span>
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i
                  ><span className="ms-4"> Intro to JavaScript</span>
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i> READING
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i> SLIDES
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  <a href="https://youtu.be/74_BnRx7Z9Y?si=vanjCQYXdwYJZO1t"
                    ><span className="ms-4">Intro to course</span></a
                  >
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i>
                  <span>Intro to HTML</span>
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i> Intro to CSS
                </li>
                <li className="list-group-item">
                  <i className="fa fa-bars me-2" aria-hidden="true"></i> Intro to
                  JavaScript
                  </li>
                          </ul>
                        </div>

                      </div>
        </div>           
                  </div>
    <div className="col-lg-3 	d-none d-xxl-block">
                <h5>Course Status</h5>
                <button type="button" class="btn btn-secondary">Unpublish</button>
                <button type="button" class="btn btn-success">Publish</button>
                <div class="mt-2">
                    <ul class="list-group rounded-0">
                        <li class="list-group-item list-group-item-secondary"><a href="#">Import Existing Content</a></li>
                        <li class="list-group-item list-group-item-secondary"><a href="#">Import from Commons</a></li>
                        <li class="list-group-item list-group-item-secondary"><a href="#">Choose Home Page</a></li>
                        <li class="list-group-item list-group-item-secondary"><a href="#">New Announcement</a></li>
                        <li class="list-group-item list-group-item-secondary"><a href="#">New Analytics</a></li>
                        <li class="list-group-item list-group-item-secondary"><a href="#">View Course Notifications</a></li>
        
                    </ul>

                </div>
                
                    
                    <h2>Coming Up</h2>
                    <a href="#">View Calendar</a>
                    <ul class="list-unstyled">
                        <li><a href="#">Lecture 1</a></li>
                        <li><a href="#">Lecture 2</a></li>
                        <li><a href="#">Lecture 3</a></li>
                        <li><a href="#">Lecture 4</a></li>
                    </ul>   

            </div>
                  </div>     
             


);
}
export default Home;