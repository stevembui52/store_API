import express from 'express';
import connect from './db/connect.js';

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());


app.get('/', (req, res) => {
    res.json({msg:'Hello World'});
})





const start = async () => {
    try {
        await connect(MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
        
    }
}

start();