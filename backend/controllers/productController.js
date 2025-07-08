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
    const image1 = req.files.image1[0]; //image1 is an array get the first element
    const image2 = req.files.image2[0];
    const image3 = req.files.image3[0];
    const image4 = req.files.image4[0];

    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );

    console.log(image1, image2, image3, image4);

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
