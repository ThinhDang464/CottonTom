import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams(); //get product id thourgh url from dynamic routing
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [productImage, setProductImage] = useState("");

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
      {/*Product Data*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*Product Image */}
        <div className="flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, index) => (
              <img
                src={img}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
