import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/cartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  //using one big controlled state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = () => {};
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/*------------LeftSide-------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        {/*CSS note: flex children even div only take as much width as content so if want full width need w-full */}
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First name"
            type="text"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last name"
            type="text"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email address"
          type="email"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
          type="text"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
            type="text"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
            type="text"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Zip code"
            type="number"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
            type="text"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone"
          type="number"
        />
      </div>

      {/*-------------------------Right Side----------------------- */}
      <div className="mt-11">
        {/* */}
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/*---------------------Payment Method Select--------------- */}
          <div className="flex gap-3 flex-col lg:flex-row flex-wrap">
            <div
              onClick={() => {
                setMethod("stripe");
              }}
              className="flex items-center gap-2 border p-2 px-3 cursor-pointer"
            >
              {/*Circle with p tag */}
              <p
                className={`${
                  method === "stripe" ? "bg-green-400" : ""
                } min-w-3.5 h-3.5 border rounded-full`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => {
                setMethod("razor");
              }}
              className="flex items-center gap-2 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`${
                  method === "razor" ? "bg-green-400" : ""
                } min-w-3.5 h-3.5 border rounded-full`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => {
                setMethod("cod");
              }}
              className="flex items-center gap-2 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`${
                  method === "cod" ? "bg-green-400" : ""
                } min-w-3.5 h-3.5 border rounded-full`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          {/*Button to navigate to order pagfe */}
          <div className="w-full text-end mt-8">
            <button
              onClick={() => {
                navigate("/orders");
              }}
              className="bg-black text-white px-16 py-3 cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
