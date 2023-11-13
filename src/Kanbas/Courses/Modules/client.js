import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSE_URL = `${API_BASE}/api/courses`;
const MODULE_URL = `${API_BASE}/api/modules`;

export const addModuleForCourse = async(courseId, module) => {
  const response = await axios.post(`${COURSE_URL}/${courseId}/modules`, module);
  return response.data;
};

export const findModulesForCourse = async(courseId) => {
    const response = await axios.get(`${COURSE_URL}/${courseId}/modules`);
    return response.data;
    };

export const updateModuleForCourse = async(module) => {
  const response = await axios.put(`${MODULE_URL}/${module._id}`, module);
  return response.data;
};

export const deleteModuleForCourse = async(moduleId) => {
  const response = await axios.delete(`${MODULE_URL}/${moduleId}`);
  return response.data;
};