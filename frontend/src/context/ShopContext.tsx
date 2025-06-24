import { createContext } from "react";
import { products } from "../assets/assets";

//store state variables to be used

// @ts-ignore
export const ShopContext = createContext();

//using context can access props ike products in every component

// @ts-ignore
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
