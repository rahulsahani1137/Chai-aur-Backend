// require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import connectToDatabase from "./db/index.js";

dotenv.config({
    path: './env'
});





connectToDatabase()
.then(() => {
    app.on("error", (error) => {
        console.error(`Server error: ${error}`);
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch(() => {
    console.log("Failed to connect to the database Failed.");
})


/*
import express from 'express';
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to MongoDB database: ${DB_NAME}`);

        app.on("error", (err) => {
            console.error("Server error:", err);
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()
*/