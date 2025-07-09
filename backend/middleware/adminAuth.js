//middleware for protected api that needs admin permission
//add this middleware in productRoute
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//next is callback func
const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers; //get token from headers
    if (!token) {
      return res.json({ succes: false, message: "Not Authorized Login Again" });
    }

    // 2. Verify the token to get the user's ID from the payload
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); //return id object
    const userId = decodedToken.id;

    // 3. Find the user in the database using the ID from the token
    const user = await userModel.findById(userId);

    // 4. Check if the user exists and if their role is 'admin'
    if (!user || user.role !== "admin") {
      return res.json({
        success: false,
        message: "Admin authorization failed.",
      });
    }

    // 5. If all checks pass, call next() to proceed to the controller, empty call back signals success control is back to the next function in productRouter
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error during admin authentication." });
  }
};

export default adminAuth;
