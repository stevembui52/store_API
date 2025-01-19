import mongoose from "mongoose";

const connect = async (url) => {
    try {
        await mongoose.connect(url)
    } catch (error) {
        console.log(error);
    }
}

export default connect;