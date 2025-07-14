import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//store state variables to be used

// @ts-ignore
export const ShopContext = createContext();

//using context can access props ike products in every component

// @ts-ignore
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState(""); //use search feature across different components
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({}); //keep track cart items
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(""); //token for login
  const navigate = useNavigate();

  /*Objects in cart items look like this:  
  {
    "productId1": { "M": 2, "L": 1 },
    "productId2": { "S": 1 }
  }*/

  //when select product n size -> add prod to cart
  //might interact with database later -> set async function
  const addToCart = async (itemId, size) => {
    //no size selected then warning msg, right now without this block size "" will be sent as arg
    if (!size) {
      toast.error("Select Product Size");
      return; //stop execution of addToCard func or else code below still run
    }

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

  const getCartCount = () => {
    let totalCount = 0;
    //each product in cartItems
    for (const items in cartItems) {
      //each size for that product
      for (const item in cartItems[items]) {
        try {
          //if specific size of item quantity > 0 then get the quantity
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalCount;
  };

  //for updating quantity at cart
  const updateQuantity = async (itemId, size, quantity) => {
    //copy of carititems
    let cardData = structuredClone(cartItems);
    cardData[itemId][size] = quantity; //update quantity of specific item
    setCartItems(cardData); //new cart Data
  };

  //get total amount price from cartItems
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      //find product price calculate based on quantity
      for (const item in cartItems[items]) {
        try {
          //check for > 0 cause when user click delete there might be entry with size: 0
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  //get products from API
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //run only once when app is mounted
  useEffect(() => {
    getProductsData();
  }, []);

  //reload website clears state token but not local storage token, used to keep user signed in
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
