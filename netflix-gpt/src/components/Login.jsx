import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn ,setIsSignIn] = useState(true);

  const toggleSignUp = () =>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt="background"
        ></img>
      </div>
      <form className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4">{isSignIn?"Sign In" : "Sign Up"}</h1>
        {!isSignIn &&<input placeholder="Name" type="text" className="p-4 my-4 w-full bg-gray-600 rounded-md" />}
        <input placeholder="Email Address" type="text" className="p-4 my-4 w-full bg-gray-600 rounded-md" />
        <input placeholder="Password" type="password" className="p-4 my-4 w-full bg-gray-600 rounded-md"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">{isSignIn?"Sign In" : "Sign Up"}</button>
        <p className="py-4  hover:scale-105 duration-300 cursor-pointer" onClick={toggleSignUp}>{isSignIn? 'New to Netflix? Sign up Now' : 'Already registered ? Sign In Now'}</p>
      </form>
    </div>
  );
};

export default Login;
