//Schema for product to store on Mongo
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, //required -> need to be saved in database
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestseller: { type: Boolean },
  date: { type: Number, required: true },
});

//when product model is already available, then that model will be used insstead of craeting multple times
const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
