package employe_management_system.employe_management_systembackend.mapper;


import employe_management_system.employe_management_systembackend.dto.EmployeeDto;
import employe_management_system.employe_management_systembackend.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee){



        return new EmployeeDto(
employee.getId(),
                employee.getFirstName(),
                employee.getFirstName(),
                employee.getEmail()



        );
    }
    public static Employee mapToEmployee(EmployeeDto employeeDto) {


    return new Employee(
     employeeDto.getId(),
     employeeDto.getFirstName(),
     employeeDto.getFirstName(),
     employeeDto.getEmail()
    );
    }
}
