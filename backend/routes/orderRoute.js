import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
import {
  placeOrder,
  userOrders,
  updateStatus,
  allOrders,
  placeOrderStripe,
  verifyStripe,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

//admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//payment features
orderRouter.post("/place", authUser, placeOrder); //need token in da header when hitting this api
orderRouter.post("/stripe", authUser, placeOrderStripe);

//user features
orderRouter.post("/userorders", authUser, userOrders);

//verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe); //success_url and cancel_url of stripe will call this api

export default orderRouter;
