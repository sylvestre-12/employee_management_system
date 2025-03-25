package employe_management_system.employe_management_systembackend.repository;

import employe_management_system.employe_management_systembackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository <Employee,Long>{
}
