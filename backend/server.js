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
*/
