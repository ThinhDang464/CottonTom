import userModel from "../models/userModel.js";
//Add product to user cart
//example data of cartData object in user model
/*{
  "65f1a2b3c4d5e6f7a8b9c0d1": { "S": 2, "M": 1 },
  "65f1a2b3c4d5e6f7a8b9c0d2": { "L": 3 },
  "65f1a2b3c4d5e6f7a8b9c0d3": { "XL": 1 }
} */
const addToCart = async (req, res) => {
  try {
    //get user id (from auth), and item id, and size (from frontend)
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData; //extract cart object from user
    //cart data has the item alrady
    if (cartData[itemId]) {
      //cart data has the item of the size already
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; //increase quantity by 1
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {}; //create object with itemID key inside cartdata object
      cartData[itemId][size] = 1;
    }

    //add updated cart data to user data
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Update user cart, in checkout or order page user can change the quantity
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    //check if item id exists
    if (cartData[itemId] && cartData[itemId][size] !== undefined) {
      cartData[itemId][size] = quantity;
      await userModel.findByIdAndUpdate(userId, { cartData });
      res.json({ success: true, message: "Cart Updated" });
    } else {
      res.json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
