import { createContext, useState } from "react";
import { products } from "../assets/assets";

//store state variables to be used

// @ts-ignore
export const ShopContext = createContext();

//using context can access props ike products in every component

// @ts-ignore
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState(""); //use search feature across different components
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({}); //keep track cart items

  //when select product n size -> add prod to cart
  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems); //create copy of objects

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
