import React, { useState } from "react";
import "./Login.css";
const Login = ({ setShowLogin }) => {
  const [userState, setUserState] = useState("login");

  return (
    <div className="w-full absolute flex items-center justify-center h-[100vh] left-0 top-0 login">
      <div className="con w-[300px] flex h-[auto] bg-[#fffafa] shadow-3xl p-[30px] flex-col rounded-3xl relative">
        <div
          onClick={() => setShowLogin(false)}
          className="absolute right-[7%] cursor-pointer rounded-full h-[40px] w-[40px] cross flex items-center justify-center top-[7%] "
        >
          <i className="fa fa-times text-[30px] "></i>
        </div>
        <p className="text-[20px] leading-normal">{userState}</p>
        <form className="flex flex-col gap-8 bg-transparent w-full">
          {userState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="User name" />
          )}
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Password" />
          <div className="w-[100%]">
            {userState === "login" ? (
              <></>
            ) : (
              <p className="mb-2">
                <input type="checkbox" required id="checked" />
                <label htmlFor="checked">Terms & Condition</label>
              </p>
            )}
            <button >{userState}</button>
          </div>
        </form>
        <p className="mt-3 cursor-pointer">
          {userState === "login" ? (
            <p onClick={() => setUserState("Create Account")}>
              Create new account ?
            </p>
          ) : (
            <p onClick={() => setUserState("login")}>Login ?</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
