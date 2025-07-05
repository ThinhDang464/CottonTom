import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      {/*inline flex turn p into inline to have hr next to it */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/*Input Field*/}
      <input
        required
        type="text"
        className=" px-3 py-2 w-full border border-gray-800"
        placeholder="Name"
      ></input>
      <input
        required
        type="email"
        className=" px-3 py-2 w-full border border-gray-800"
        placeholder="Email"
      ></input>
      <input
        required
        type="password"
        className=" px-3 py-2 w-full border border-gray-800"
        placeholder="Password"
      ></input>
    </form>
  );
};

export default Login;
