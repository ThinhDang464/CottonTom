import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController";
import authUser from "../middleware/auth";

const cartRouter = express.Router();

//auth user run first to retreive the userID and put it in req body so api function can use
cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
