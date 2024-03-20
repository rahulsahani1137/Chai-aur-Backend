import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addessLine1: {
        type: String,
        required: true
    },
    addessLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    specialzedIn: [
        {
            type: String
        }
    ]
},{timestamps: true});

export const Hospital = mongoose.model("Hospital", hospitalSchema);