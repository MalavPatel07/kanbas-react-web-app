import logo from "./logo.svg";

import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import Project from "./project";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";


function App() {
  //const screen = "Labs";
  return (
    <HashRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="project" />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/project/*" element={<Project />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;