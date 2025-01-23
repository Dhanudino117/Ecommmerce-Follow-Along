class ErrorHandler extends Error{
    constructor(message, code){
        super(message);
        this.code = code || 500;

        Error.captureStackTrace(this,this.constructor)
    }
}
module.exports = ErrorHandler;