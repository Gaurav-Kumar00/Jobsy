import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URL);

        console.log("DB Connected Successfully");
    } catch (error) {
        console.log("DB Error: " + error);
    }
};

export default dbConnection;
