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

  /*Objects in cart items look like this:  
  {
    "productId1": { "M": 2, "L": 1 },
    "productId2": { "S": 1 }
  }*/

  //when select product n size -> add prod to cart
  //might interact with database later -> set async function
  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems); //create copy of objects, prevent anti React mutation of state, no muate state directly

    //if product exist in cart
    if (cartData[itemId]) {
      //if that size for that product exist
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      //if product does not exist then create an object for it + add size quantity = 1
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
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
