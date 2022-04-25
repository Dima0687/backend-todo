
class OurErrors extends Error { 
    constructor(message, statusCode) {
        super(message);
      this.statusCode = statusCode;
    }
}

const createError = (msg, statusCode) => {
    return new OurErrors(msg, statusCode)
}

export {
      OurErrors, createError
}