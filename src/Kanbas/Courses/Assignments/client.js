import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSE_URL = `${API_BASE}/api/courses`;
const ASSIGNMENT_URL = `${API_BASE}/api/assignments`;


export const addAssignmentForCourse = async(courseId, assignment) => {
    const response = await axios.post(`${COURSE_URL}/${courseId}/assignments`, assignment);
    return response.data;
    };

export const findAssignmentsForCourse = async(courseId) => {
    const response = await axios.get(`${COURSE_URL}/${courseId}/assignments`);
    return response.data;
    };

export const updateAssignmentForCourse = async(assignment) => {
    const response = await axios.put(`${ASSIGNMENT_URL}/${assignment._id}`, assignment);
    return response.data;
    };

export const deleteAssignmentForCourse = async(assignmentId) => {
    const response = await axios.delete(`${ASSIGNMENT_URL}/${assignmentId}`);
    return response.data;
    };


export const findAssignmentById = async(assignmentId) => {
    const response = await axios.get(`${ASSIGNMENT_URL}/${assignmentId}`);
    return response.data;
    };


