import express from "express";
import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

const orderRouter = express.Router();

orderRouter.post("/", async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems,
  });
  console.log(newOrder);
  const order = await newOrder.save();
  res.status(201).send({ message: "New order created", order });
});

export default orderRouter;
