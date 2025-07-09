import productModel from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";
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

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    ); //only store available images that user upload to array

    /*---------------------------------------------CLOUDINARY------------------------------------------------------------- */
    //upload images to cloudinary and get permanent url to store in images url array
    //Promise.all takes an aray of promise as parameter (since async with map we create an array [Promise, Promise, Promise] before it is resolved)
    //Promise.all turn array of promise into one single promise represent entire batch
    //type of data return back to imagesURL depends on what each promise item resolves to - array of string url
    //promise all runs all the input promises concurrently
    /*WITH TRADITIONAL SEQUENTIAL UPLOAD WITH FOR LOOP:
    let urls = [];
    for (const image of images) {
      // The 'await' here PAUSES the entire loop for each upload
      let result = await cloudinary.uploader.upload(image.path);
      urls.push(result.secure_url);
    }

    image upload then pause and wait for upload done before second image start upload -> inefficent

    WITH PROMISE ALL:
    map go through all upload and call upload for eachone roughly same time -> collect 4 pending promises into arra
    await Promise all pause the function wait for all concurrent running uploads to complete instead of each single one
    */
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        }); //path is a property of item in images aray, result now contains all info ab upload to Cloudinary, extract secure_url for permanent link
        return result.secure_url;
      })
    );

    // console.log(
    //   name,
    //   description,
    //   price,
    //   category,
    //   subCategory,
    //   sizes,
    //   bestseller
    // );

    // console.log(images); // [{fieldname:image 1, originalname:,encoding, etc},...] an array of object has info about the file uploaded

    /*----------------------------------------------------------SAVE UPLOADED PRODUCT TO MONGODB---------------------------------------------- */
    const productData = {
      name,
      description,
      category,
      price: Number(price), //price from form data is string
      subCategory,
      bestseller: bestseller === "true" ? true : false, //string to boolean
      sizes: JSON.parse(sizes), //sizes send as string from frontend here convert sizes from string to aray
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save(); //dont use any properties from product now so no need another const like userController to generate token
    res.json({ success: true, message: "Product added to DB" });
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
