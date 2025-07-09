import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

//user post frontend /api/product/add -> contain files -> productRouter receive run upload.fields
//multer parse multipart/form-data which is the file and save to temporary server disk
//multer then attach object called files to req.files so now we have req.body and req.files
/* req.files will look something like this:
{
  "image1": [{ ...file info for image 1... }],
  "image2": [{ ...file info for image 2... }],
  "image3": [{ ...file info for image 3... }],
  "image4": [{ ...file info for image 4... }]
} */
//addProduct in controller should take req.file upload to CLoudinary and retrieve permanent url
productRouter.post(
  "/add",
  adminAuth, //adminAuth runs before multer
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
); //need upload middleware to facilitate image upload multipart
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProduct);

export default productRouter;
