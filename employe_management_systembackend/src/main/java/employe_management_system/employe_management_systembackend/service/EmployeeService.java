package employe_management_system.employe_management_systembackend.service;


import employe_management_system.employe_management_systembackend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
EmployeeDto getEmployeeById(Long employeeId);

List<EmployeeDto> getAllEmployee();
EmployeeDto updateEmployee(Long employeeId,EmployeeDto updateEmployee);
void deleteEmployee(Long employeeId);



}
