/**
 * Async wrapper function to handle errors in asynchronous middleware functions.
 * @param {Function} fn - The asynchronous middleware function to be wrapped.
 * @returns {Function} - A new function that wraps the original function and catches any errors.
 */
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            // Await the execution of the original asynchronous function
            await fn(req, res, next);
        } catch (error) {
            // Pass any caught errors to the next middleware function
            next(error);
        }
    };
};

export default asyncWrapper;