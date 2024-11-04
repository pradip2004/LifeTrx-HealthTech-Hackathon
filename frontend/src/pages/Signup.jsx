import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [userType, setUserType] = useState("Patient");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const patientVideoSrc = "src/assets/video2.mp4"; 
  const doctorVideoSrc = "src/assets/video1.mp4"; 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-pink-500 to-pink-700 overflow-hidden">
      <div className={`bg-white bg-opacity-90 rounded-xl shadow-lg p-8 w-full max-w-3xl md:flex ${userType === "Patient" ? "animate-slideLeft" : "animate-slideRight"} backdrop-blur-md`}>
        
        <div className={`md:w-1/2 hidden md:block ${userType === "Patient" ? "order-last" : "order-first"}`}>
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg"
            src={userType === "Patient" ? patientVideoSrc : doctorVideoSrc}
            type="video/mp4"
          />
        </div>
        
        <div className="md:w-1/2 p-6 md:p-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-light text-zinc-600" style={{ fontFamily: 'Oxygen, sans-serif' }}>
              Welcome to Mediease
            </h1>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="border border-zinc-600 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-pink-500"
            >
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>
          <form>
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Your Email"
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
            <div className="relative mb-6">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full px-4 py-3 border border-zinc-600 rounded-lg focus:outline-none focus:ring focus:ring-pink-500 placeholder-zinc-600 transition duration-300 bg-transparent text-zinc-600"
                required
              />
              <div
                className="absolute right-4 top-3 cursor-pointer"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                <FontAwesomeIcon icon={confirmPasswordVisible ? faEye : faEyeSlash} className="text-zinc-600" />
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold py-3 rounded-lg hover:bg-gradient-to-l transition linear duration-400">
              Sign Up
            </button>
          </form>
          <div className="text-center my-4">
            <span className="text-zinc-600">Or sign up with</span>
            <div className="border-b-2 border-dotted border-zinc-600 my-2 mx-auto w-32" />
          </div>
          <div className="flex justify-around mt-4">
            <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-3xl cursor-pointer" />
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-3xl cursor-pointer" />
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
