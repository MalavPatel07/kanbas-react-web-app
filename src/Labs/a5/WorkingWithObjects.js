import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
      });
      const API_BASE = process.env.REACT_APP_API_BASE;
      const URL = `${API_BASE}/a5/assignment`;
      const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios.get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      const setScore = async () => {
        const response = await axios.get(`${URL}/score/${assignment.score}`);
        setAssignment(response.data);
      };

      const setCompleted = async () => {
        const response = await axios.get(`${URL}/completed/${assignment.completed}`);
        setAssignment(response.data);
      };

      useEffect(() => {
        fetchAssignment();
      }, []);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      {/* <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a> */}
      <input
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        />
        <button onClick={updateTitle}
              className="btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment}
              className="btn btn-danger mb-2">
        Fetch Assignment
      </button>
        
        <input
        onChange={(e) => setAssignment({ ...assignment,
            score: e.target.value })}
        value={assignment.score}
        className="form-control mb-2 w-75"
        />

        <button onClick={setScore}
              className="btn btn-primary mb-2">
        Update Score to: {assignment.score}
      </button>

        {/* <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary"
        >
        Update Score
        </a> */}
        <br/> 
        {/* <a
  href={`${URL}/completed/${assignment.completed}`}
  className={`btn btn-primary me-2 float-end ${
    assignment.completed ? 'completed' : 'not-completed'
  }`}
>
  {assignment.completed ? 'Mark as Completed' : 'Mark as Not Completed'}
</a> */}
<button onClick={setCompleted}
  className={`btn btn-primary me-2 float-end ${
    assignment.completed ? 'completed' : 'not-completed'
  }`}
>
  {assignment.completed ? 'Mark as Completed' : 'Mark as Not Completed'}
</button>
<div>
  <label>
    <input
      type="checkbox"
      onChange={() => setAssignment({ ...assignment, completed: true })}
      checked={assignment.completed === true}
    />
    Completed
  </label>
</div>
<div>
  <label>
    <input
      type="checkbox"
      onChange={() => setAssignment({ ...assignment, completed: false })}
      checked={assignment.completed === false}
    />
    Not Completed
  </label>
</div>

      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`}
         className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving properties</h4>
      <a href={`${API_BASE}/a5/assignment/title`}
         className="btn btn-primary me-2">
        Get Assignment Title
        </a>
    </div>
  );
}
export default WorkingWithObjects;