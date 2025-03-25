package employe_management_system.employe_management_systembackend.entity;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="employees")

public class Employee {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)

private  Long id;
@Column(name= "first_Name")
private String firstName;
    @Column(name= "last_Name")
    private String lastName;
    @Column(name="email" , nullable = false ,unique = true)
    private String email;


}
