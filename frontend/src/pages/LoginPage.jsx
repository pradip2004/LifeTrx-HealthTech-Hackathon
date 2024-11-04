import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-pink-500 to-pink-700 overflow-hidden">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 w-full max-w-3xl md:flex backdrop-blur-md">
        
        <div className="md:w-1/2 hidden md:block">
          <img
            src="src/assets/Signin.jpg"
            alt="Login Visual"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="md:w-1/2 p-6 md:p-10">
          <h1 className="text-3xl font-light text-zinc-600 mb-6" style={{ fontFamily: 'Oxygen, sans-serif' }}>
            Welcome Back
          </h1>
          <form>
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 border border-zinc-600 rounded-lg focus:outline-none focus:ring focus:ring-pink-500 placeholder-zinc-600 transition duration-300 bg-transparent text-zinc-600"
                required
              />
            </div>
            <div className="relative mb-6">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 border border-zinc-600 rounded-lg focus:outline-none focus:ring focus:ring-pink-500 placeholder-zinc-600 transition duration-300 bg-transparent text-zinc-600"
                required
              />
              <div
                className="absolute right-4 top-3 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} className="text-zinc-600" />
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold py-3 rounded-lg hover:bg-gradient-to-l transition linear duration-400">
              Login
            </button>
          </form>
          
          <div className="text-center my-4">
            <span className="text-zinc-600">Or login with</span>
            <div className="border-b-2 border-dotted border-zinc-600 my-2 mx-auto w-32" />
          </div>
          <div className="flex justify-around mt-4">
            <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-3xl cursor-pointer" />
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-3xl cursor-pointer" />
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-3xl cursor-pointer" />
          </div>

          <p className="text-center text-zinc-600 mt-6">
            Don't have an account? 
            <span className="font-bold cursor-pointer text-pink-500 hover:underline"> Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
