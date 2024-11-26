class customError extends Error{
    constructor(statusCode,message){
        super(message);
        this.statusCode = statusCode;
    }
};

class BadRequest extends customError{
    constructor(message){
        super(400,message);
    }
};

class NotFound extends customError{
    constructor(message){
        super(404,message);
    }
};

class Conflict extends customError{
    constructor(message){
        super(409,message);
    }
};

module.exports = {BadRequest,NotFound,Conflict};