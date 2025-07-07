/*dependecies explain 
Core:
express: web app framework for Node -> tool to build server and API routes, handle HTTP requests
mongoose: library for mongoDB
cors: security middleware -> allow FE (in different domain or port) to make request to backend server
dotenv: loads environment variable from .env file
bcrypt: hash password securely
jsonwebtoken: create and verify JSOn Web Tokens to handle user authentication, when user logs in -> server generated signed token sends to frontend

Dev Uitlity Packages:
nodemon: restart server when save a file
validator: validating and sanitizing string -> checking user input

Funtional Package:
multer: uploading files = profile pic, product images, etc
stripe razorpay: payment
cloudinary: cloud based platform for managing images and vids, after upload using multer -> often use this to send image to cloudinary for storage + delivery via CDN

extension:
thunderclient

Database: MongoDB
cluster - nodes (servers) working together for scalability
*/

/*Create basic server*/
//without type module in package.json we have to use old import: const express = require('express');
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

//App Config - use express create instance of express server, and connect cloudinary storage and MongoDB
const app = express();
const port = process.env.PORT || 4000; //if not available then use port 4000
connectDB();
connectCloudinary();

//Middleware - request comes into server from frontend will pass thru middleware
app.use(express.json()); //convert request from frontend from json string to js object
app.use(cors()); //unlock frontend port, defy allowed ports

//API Endpoints
//simple route handler
app.get("/", (req, res) => {
  res.send("API Working"); //whenever open port 400 display API working
});

app.listen(port, () => console.log("Server started on PORT : " + port)); //start server, bind express application to a network port -> put in listen state for incoming req
