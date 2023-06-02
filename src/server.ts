import mongoose from "mongoose";
import app from "./app";

async function bootstarp() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log(`Database is connected successfully`);
    }
    catch (error) {
        console.log(`Failed to connect`)
    }
}

bootstarp();