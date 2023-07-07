import { Router } from "express";
const usersRouter = Router();

usersRouter.get("/", ()=>console.log("hola"))

export default usersRouter;