import mongoose from "mongoose";

const DB_CONNECTION_LINK = process.env.MONGODB_CONNECTION_LINK;

const connection = async () => {
    mongoose.connect(DB_CONNECTION_LINK);
    return mongoose.connection
}

export default connection