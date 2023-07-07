import mongoose from "mongoose"
import config from "../config/config.js"
import userModel from "./mongo/models/user.mongo.js";

const DB_USER = config.MONGO_USER;
const DB_PASS = config.MONGO_PASS;
const DB_NAME = config.MONGO_DB;
const DB_CLUSTER = config.MONGO_CLUSTER
const STRING_CONNECTION = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`

const environment = async () => {
    try {
        await mongoose.connect(
        STRING_CONNECTION
    );
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log(`Error al conectar a MongoDB: ${error}`);
    }
};

const persistence = config.PERSISTENCE;

export{
    environment
}