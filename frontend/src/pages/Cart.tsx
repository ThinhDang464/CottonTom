import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/cartTotal";

const Cart = () => {
  //could have initialize useNaigate but Im lazy :p
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  //we need a state variable to store our custom array of card data using both products properties and cartItems properties
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    //cartItems and products are fetched and set asynchronously, we need guard like products.length > 0 and dependency
    //to make this page re-render when products, and cartItems is finish updated
    //cartItems can be finished first and setCartData set new cartData but products might not be
    //finished to rendering below with html is error -> make sure only setcartData when products is finshed loading
    if (products.length > 0) {
      //products data amd cartdata combiens together incartData
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });

            /* 
          sample data
          [
                { _id: "aaaaa", size: "M", quantity: 2 }, // Product "aaaaa", size M
                { _id: "aaaaa", size: "L", quantity: 1 }, // Product "aaaaa", size L
                { _id: "bbbbb", size: "S", quantity: 1 }  // Product "bbbbb", size S
              ]
          */
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-col-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/*items-start align item to top vertically
              this is the first column grid take up 4fr space smal and up screen
              */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    {/*use size from state variable*/}
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 ">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              {/*next column for quantity*/}
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border max-w-10 sm:max-w-15 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                /*
                User clicks delete: The quantity for a specific product/size is set to 0 in cartItems.

                State changes: setCartItems triggers a re-render.

                Effect runs: The useEffect hook runs again because cartItems changed.

                cartData is rebuilt: The effect filters out any items with quantity 0, so those items are not included in cartData.

                UI updates: The cart UI re-renders, and the deleted item disappears from the list.
                */
                onClick={() => {
                  updateQuantity(item._id, item.size, 0);
                }}
                className="w-4 mr-4 sm:mr-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
        <div className="flex justify-end my-20">
          {/*full width in mobile screen */}
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => {
                  navigate("/place-order");
                }}
                className="bg-black text-white text-sm my-8 px-8 py-3"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
