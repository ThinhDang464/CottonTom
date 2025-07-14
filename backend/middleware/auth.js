import jwt from "jsonwebtoken";
//this middleware authenticate normal users whenever use cart functions
//convert user token to user id
//we dont want to send userID straight away from front end cause security issues
//this is where we get userID from token (cause token was made from userID in userController)
const authUser = async (req, res, next) => {
  const { token } = req.headers; //frontend need to add token to headers when sending req
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    //modify the request body to have userID instead of token now, for api call to use userID
    req.body.userId = token_decode.id; //userId must be sent from frontend, id is the object we named in userController to be user id
    next(); //pass back control
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
