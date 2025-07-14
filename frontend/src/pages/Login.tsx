import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  //set as async cause it will deal with databae operation later on
  const onSubmitHandler = async (event) => {
    event.preventDefault(); //no reloading when submit

    //login, sign up logic
    try {
      if (currentState === "Sign Up") {
        //sign up API
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log(response.data);
        //store token into token state
        if (response.data.success) {
          setToken(response.data.token);
          //store in local storage token
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        //Login APi
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    //if token is generated mean user log in and sign up -> redirect to home page
    //check ShopContext to see how we prevent token from missing after reload by using local storage token
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <form
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      {/*inline flex turn p into inline to have hr next to it */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {/*Input Field*/}
      {currentState === "Login" ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          type="text"
          className="px-3 py-2 w-full border border-gray-800"
          placeholder="Name"
        ></input>
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        type="email"
        className=" px-3 py-2 w-full border border-gray-800"
        placeholder="Email"
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        type="password"
        className=" px-3 py-2 w-full border border-gray-800"
        placeholder="Password"
      ></input>
      <div className="w-full flex justify-between text-sm">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => {
              setCurrentState("Sign Up");
            }}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => {
              setCurrentState("Login");
            }}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-2">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
