import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//Allow user to create account or login on the website logic
//token generation func
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password); //user.password is the one saved in DB(hashed)

    if (isMatch) {
      //generate valid token
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      //password do not match
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Route for user sign up
const registerUser = async (req, res) => {
  //sending back response
  //response is send back to whatever client makes the request
  //res.json({ msg: "Register API Working" }); test code, browser will receive the string

  try {
    const { name, email, password } = req.body; //req.body is JS object, when send over network stringify is used to send as string but server.js have express.json() to turn them into obj
    //checking email duplication for existing
    //await can only be used in async func, pause the execution of the function until a time-consuming operation (a Promise) is finished
    //
    const exist = await userModel.findOne({ email }); //object as parameter, same as writing {email:email}
    if (exist) {
      return res.json({
        success: false,
        message: "An account with this email already exists.",
      }); //send to browser frontend
    }

    //check valid email and password
    if (!validator.isEmail(email)) {
      //not vallid email
      return res.json({
        success: false,
        message: "Please enter a valid email.",
      });
    }
    if (password.length < 8) {
      //not vallid password
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hash password secure, use salt to hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user in DB
    //mongoose model work like a constructor function -> use new keyword to create new instances of it, or use create() instead of new
    //use the main userModel you import to interact with the database collection as a whole. You use new userModel() to create a new,
    // blank record that you can fill out and add to that collection
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    //save user to DB, can use info from const user
    const user = await newUser.save(); //_id will be genrated by default from mongoDB
    //prodvide token afer creating user so user can log in using id
    const token = createToken(user._id);
    //save token to browser
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Route for admin login + admin function for protected route + generate token for admin user
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //find user with that email
    const user = await userModel.findOne({ email });

    //check if user exist
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    //compare password provided with database password (hashed)
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    //check role
    if (user.role !== "admin") {
      return res.json({
        success: false,
        message: "Not authorized for admin access",
      });
    }

    //if all check pass -> generate token
    const token = createToken(user._id);
    res.json({ success: true, token, message: "Admin Login Successful" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
