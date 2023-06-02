import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function bootstarp() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`Database is connected successfully`);

        app.listen(config.port, () => {
  console.log(`University app listening on port ${config.port}`)
})
    }
    catch (error) {
        console.log(`Failed to connect`)
    }
}

bootstarp();