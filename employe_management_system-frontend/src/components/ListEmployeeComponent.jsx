import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
     getAllEmployee();
    }, []);


    function getAllEmployee(){
        listEmployees()
        .then(response => {
            console.log("Fetched employees:", response.data); // Log the fetched data
            setEmployees(response.data);
        })
        .catch(error => {
            console.error("Error fetching employees:", error);
        })
    }

    const addEmployee = () => {
        navigator('/add-employee');
    };

    const updateEmployee = (id) => {
        navigator(`/edit-employee/${id}`);
    };
function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response)=>{
getAllEmployee();
    }).catch(error=>{
        console.error(error);
    })
}
    return (
        <div className='container'>
            <h1 className='text-center'>List of Employees</h1>
            <button className='btn btn-primary mb-2' onClick={addEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No employees found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;