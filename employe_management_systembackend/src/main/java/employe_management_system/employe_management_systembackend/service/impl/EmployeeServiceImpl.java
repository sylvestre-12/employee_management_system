package employe_management_system.employe_management_systembackend.service.impl;

import employe_management_system.employe_management_systembackend.dto.EmployeeDto;
import employe_management_system.employe_management_systembackend.entity.Employee;
import employe_management_system.employe_management_systembackend.exception.ResourceNotFoundException;
import employe_management_system.employe_management_systembackend.mapper.EmployeeMapper;
import employe_management_system.employe_management_systembackend.repository.EmployeeRepository;
import employe_management_system.employe_management_systembackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

   private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
      Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

Employee savedEmployee = employeeRepository.save(employee);


        return  EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
        new ResourceNotFoundException("Employee Does not Exit:"+employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);

    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
       List<Employee>  employees = employeeRepository.findAll();
       return employees.stream().map((employee )->EmployeeMapper.mapToEmployeeDto(employee))
               .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee) {

  Employee employee=employeeRepository.findById(employeeId).orElseThrow(
          ()->new ResourceNotFoundException("Employee is not Exits with given Id:"+employeeId)

  );
  employee.setFirstName(updateEmployee.getFirstName());
  employee.setLastName(updateEmployee.getLastName());
  employee.setEmail(updateEmployee.getEmail());
  Employee updateEmployeeObj= employeeRepository.save(employee);
  return  EmployeeMapper.mapToEmployeeDto(updateEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee Does not Exit:"+employeeId));
        employeeRepository.deleteById(employeeId);

    }
}
