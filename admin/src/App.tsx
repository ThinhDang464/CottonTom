import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL; //get the httplocalholst4000 from env use in any coponents

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  ); //when theres token available use it, if not empty, prevent refresh page to logout user

  //local storage for not logged out when refresh
  useEffect(() => {
    //whenever token updated localstorage will store new token
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {/*Show login screen when theres no token */}
      {token === "" ? (
        <Login setToken={setToken} /> //pass props to Login
      ) : (
        <>
          <NavBar setToken={setToken} />
          <hr className="border-gray-300" />
          <div className="flex w-full ">
            <SideBar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                {/*pass tokens to these pages cause we need to provide tokens to make api call later */}
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
