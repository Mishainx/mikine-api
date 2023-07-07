import dotenv from 'dotenv'

dotenv.config();

export default{
    PORT: process.env.PORT || 8181,
    MONGO_PASS: process.env.MONGO_PASS,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_DB: process.env.MONGO_DB,
    MONGO_CLUSTER: process.env.MONGO_CLUSTER,
    PERSISTENCE: process.argv.includes("memory")? "memory" : "mongo"
}