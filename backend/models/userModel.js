import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, //one emai used
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }, //new user, cart empty obj
  },
  { minimize: false } //need this to prevent mongoose from discard empty object like default of cartData when saving to databae
);

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;
