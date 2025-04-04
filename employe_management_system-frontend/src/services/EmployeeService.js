import axios from "axios"; // Correct import for axios

const REST_API_BASE_URL = 'http://localhost:8080/api/employees'; // Fixed the variable name

export const listEmployees = () => axios.get(REST_API_BASE_URL); // Corrected 
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);
export const getEmployeeById = (employeeId) => axios.get(`${REST_API_BASE_URL}/${employeeId}`); // Fixed concatenation
export const updateEmployee = (employeeId, employee) => axios.put(`${REST_API_BASE_URL}/${employeeId}`, employee);
export const deleteEmployee = (employeeId) => axios.delete(`${REST_API_BASE_URL}/${employeeId}`); // Fixed string interpolation