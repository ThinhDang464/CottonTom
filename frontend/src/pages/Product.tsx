import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams(); //get product id thourgh url from dynamic routing
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [productImage, setProductImage] = useState("");
  const [productSize, setProductSize] = useState("");

  const fetchProductData = async () => {
    //run func when content loaded
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setProductImage(product.image[0]);
    }
    // console.log(productData); this would not work because schedule update dont happen right away whereas this commadn run right after if block
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*-----------------Product Data-------------------------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*---------------------Product Image------------------ */}
        {/*reverse - last item i html code uptop for mobile */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.1%] w-full">
            {productData.image.map((img, index) => (
              <img
                onClick={() => {
                  setProductImage(img);
                }}
                src={img}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={productImage} alt="" />
          </div>
        </div>

        {/*---------------------------Product Information-----------------------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-1">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-3 text-2xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-3 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((size, index) => (
                <button
                  onClick={() => {
                    setProductSize(size);
                  }}
                  className={`
                  py-2 px-4 rounded-md font-medium cursor-pointer
                  border-2 
                  transition-all duration-200 ease-in-out
                  /* --- Conditional Styles --- */
                  ${
                    size === productSize
                      ? "bg-black text-white border-black" // SELECTED: High contrast and solid
                      : "bg-white text-gray-700 border-gray-300 hover:border-black" // UNSELECTED: Clean with a hover effect
                  }
                `}
                  key={index}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 active:bg-gray-700 cursor-pointer">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available</p>
            <p>Easy return policy within 7 days</p>
          </div>
        </div>
      </div>

      {/*--------------Description and Review----------------*/}
      <div className="mt-20">
        <div>
          <div className="flex">
            <p className="border px-5 py-3 text-sm">Description</p>
            <p className="border px-5 py-3 text-sm ml-2">Reviews (122)</p>
          </div>
          <div className="flex flex-col mt-2 gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              eaque quibusdam voluptatibus blanditiis veniam inventore, quod
              voluptates, architecto odio nihil repellat. Aliquid, sapiente
              officiis impedit consectetur temporibus deleniti ipsam optio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              ducimus. Iusto dolorum dolor fuga dolores rerum deserunt explicabo
              dolore laboriosam itaque. Doloremque, iure maiores? Recusandae,
              accusamus explicabo. Voluptatem, in minima!
            </p>
          </div>
        </div>
      </div>

      {/*--------------Related Products----------------*/}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        currentProductId={productData._id}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;

//scroll bar is hidden in index.css webkit scrollbar
