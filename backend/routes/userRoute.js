import express from "express";
import {
  loginUser,
  adminLogin,
  registerUser,
} from "../controllers/userController.js";

//Create user router to create get or post method
//controller deals with database, logic(receiving request from router etc, sending respond), router deal with api endpoints
const userRouter = express.Router();

userRouter.post("/register", registerUser); //whenever /register then call the registerUser function
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

export default userRouter;
