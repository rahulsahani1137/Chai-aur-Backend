//require('dotenv').config({path: './env' }
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

//Recently introduced
dotenv.config({
    path: './env'
})

connectDB()
