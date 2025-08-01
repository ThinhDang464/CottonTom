import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  // @ts-ignore
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  //whenever component loaded -> load 10 products from products data
  useEffect(() => {
    setLatestProduct(products.slice(0, 10)); //slice creates new smaller array containes first 10 items
  }, [products]); //update products UI when products array changes

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        {/*passing props text 1 and text 2 */}
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Check Out Our Latest Summer Collection, Your Style Refresh Starts
          Here.
        </p>
      </div>

      {/*DIsplay new products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((item, index) => (
          //@ts-ignore
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
