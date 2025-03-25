package employe_management_system.employe_management_systembackend.exception;

import jdk.jshell.spi.ExecutionControl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.annotation.RequestScope;





@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{


    public ResourceNotFoundException(String message){
        super(message);
    }


}
