// Description: Main entry point for the application.
// It imports the required modules and starts the server.
// It creates an Express application, sets up middleware, and starts the server.
import express from 'express';
import connect from './db/connect.js';
import notFound from './middleware/not_found.js';
import errorHandler from './middleware/error-handler.js';
import router from './routes/products.js';
import async_errors from "express-async-errors";

const app = express();

const PORT = process.env.PORT || 5000;

// Import the MONGO_URI from the .env file
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

// Mount the router
app.use('/api/v1/products', router);

// root route handler   
app.get((req, res) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.json({ msg: 'Hello World' });
});

app.use(notFound);
app.use(errorHandler);

/**
 * Starts the server and connects to the database.
 * @async
 * @function
 * @returns {Promise<void>}
 */
const start = async () => {
    try {
        await connect(MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();