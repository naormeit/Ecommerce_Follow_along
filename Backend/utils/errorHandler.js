class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message); // Call the parent class constructor with the error message
        this.statusCode = statusCode || 500; // Set the status code for the error
        
        Error.captureStackTrace(this, this.constructor);
    
    }
}

module.exports = ErrorHandler