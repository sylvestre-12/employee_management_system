package employe_management_system.employe_management_systembackend.controller;


import employe_management_system.employe_management_systembackend.dto.EmployeeDto;
import employe_management_system.employe_management_systembackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")

public class EmployeeController {
    private EmployeeService employeeService;
@PostMapping
//built add employee REST API
    public ResponseEntity<EmployeeDto>createEmployee(@RequestBody EmployeeDto employeeDto){
       EmployeeDto savedEmployee=employeeService.createEmployee(employeeDto);
       return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);

    }
    //Get Employee Rest API
     @GetMapping("/{id}")
public ResponseEntity<EmployeeDto>getEmployeeById(@PathVariable("id") Long employeeId){
    EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
    return ResponseEntity.ok(employeeDto);
}//Get all Employees
    @GetMapping
  public ResponseEntity<List<EmployeeDto>>getAllEmployees(){
    List<EmployeeDto > employees=employeeService.getAllEmployee();
 return ResponseEntity.ok(employees);

  }
  //update employee rest api
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto>updateEmployee(@PathVariable("id") Long employeeId,@RequestBody EmployeeDto updatedEmployee){
    EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
    return  ResponseEntity.ok(employeeDto);

    }
   // delete rest api
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteEmployee(@PathVariable ("id") Long employeeId){
    employeeService.deleteEmployee(employeeId);
    return ResponseEntity.ok("Employee Deleted successfull!");


    }

}
