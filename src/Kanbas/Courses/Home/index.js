import ModuleList from "../Modules/ModuleList";
import '@fortawesome/fontawesome-free/css/all.min.css'

function Home() {
  return (

    <div className="col-lg-8">
                          <div className="p-2">
                            <div className="row row-cols-lg-auto g-3 float-end">
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
<div className="container" style={{height: '60%', overflowY: 'scroll'}}>
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
    // <div className="row">
    //     <div className="col-10">
    //         <h2>Home</h2>
    //         <ModuleList />
    //     </div>
    //     <div className="col-2">
    //         <h2>Status</h2>
    //     </div>
    // </div>
  );
}
export default Home;