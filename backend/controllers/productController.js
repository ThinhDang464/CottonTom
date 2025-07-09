import productModel from "../models/productModel.js";
//to manage product

//use Thunder CLient to test, form data enabled
const addProduct = async (req, res) => {
  //use multer to add product with file upload for images
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    //get images from req.files
    //if image avilable then access the image, if not const = undefined
    const image1 = req.files.imag1 && req.files.image1[0]; //image1 is an array get the first element, maxCOunt = 1 makes sure array only have 1 element
    const image2 = req.files.imag2 && req.files.image2[0];
    const image3 = req.files.imag3 && req.files.image3[0];
    const image4 = req.files.imag4 && req.files.image4[0];

    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );

    console.log(image1, image2, image3, image4); // {fieldname:image 1, originalname:,encoding, etc} an object has info about the file uploaded

    res.json({});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listProduct = async (req, res) => {};

const removeProduct = async (req, res) => {};

//single product info
const singleProduct = async (req, res) => {};

export { addProduct, listProduct, removeProduct, singleProduct };
