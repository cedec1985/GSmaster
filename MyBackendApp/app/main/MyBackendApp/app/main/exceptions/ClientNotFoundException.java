package MyBackendApp.app.main.exceptions;

import jdk.jshell.spi.ExecutionControl;

public class ClientNotFoundException extends ExecutionControl.UserException {

    public ClientNotFoundException(String message, String causeExceptionClass, StackTraceElement[] stackElements) {
        super("client non trouvé", causeExceptionClass, stackElements);
    }

    }

