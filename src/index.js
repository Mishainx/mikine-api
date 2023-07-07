import express from "express"
import config from "./config/config.js";
console.log(config.PERSISTENCE)

//Routers
import usersRouter from "./routes/users.routes.js";

export const app = express();

//Configuración del servidor
const httpServer = app.listen(config.PORT, async () => {
    console.log(`Server running on port ${config.PORT}`);
});

//Middelware para trabajar con archivos .Json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas express
app.use("/api/users",usersRouter)