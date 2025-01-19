class CustomApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        // Error.captureStackTrace(this, this.constructor);
    }
}

const customError = (msg, statusCode) => {
    return new CustomApiError(msg, statusCode);
}

export { CustomApiError, customError };
