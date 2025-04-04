import React, { useState, useEffect } from 'react';
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const navigator = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getEmployeeById(id).then(response => {
                const employee = response.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmail(employee.email);
            }).catch(error => {
                console.error("Error fetching employee data:", error);
            });
        }
    }, [id]);

    const saveEmployee = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const employee = { firstName, lastName, email };
            const request = id ? updateEmployee(id, employee) : createEmployee(employee);
            request.then(response => {
                console.log(response.data);
                navigator('/employees');
            }).catch(error => {
                console.error("Error saving employee:", error);
            });
        }
    };

    const validateForm = () => {
        const errorsCopy = {};
        let valid = true;

        if (!firstName.trim()) {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }
        if (!lastName.trim()) {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }
        if (!email.trim()) {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    };

    const pageTitle = () => {
        return id ? <h2 className='text-center'>Update Employee</h2> : <h2 className='text-center'>Add Employee</h2>;
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form onSubmit={saveEmployee}>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Enter First Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee first name'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Enter Last Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee last name'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Enter Email</label>
                                <input
                                    type='email'
                                    placeholder='Enter employee email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <button type='submit' className='btn btn-success'>Save Employee</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;