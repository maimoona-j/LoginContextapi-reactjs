import React, { useContext } from "react";
import { ContextLogin } from "../Context/ContextLogin";

export default function Login() {
  const { setUsername, setEmail, setShowProfile } = useContext(ContextLogin);

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    setShowProfile(true);
  };

  return (
    <div className="border border-purple-800 shadow-lg rounded w-[500px] ml-[500px] h-[350px] mt-36 bg-purple-200">
      <form onSubmit={handleSubmit} className=" flex flex-col  m-12 ">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border p-3 mt-2"
          onChange={handleUserChange}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border p-3 mt-2"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          className="border p-3 mt-2 "
          placeholder="Enter Your Passsword"
        />
        <button className="bg-purple-700 p-4 mt-5 shadow-lg rounded-full text-white font-semibold hover:bg-purple-400 hover:text-black  ">
          Login
        </button>
      </form>
    </div>
  );
}
