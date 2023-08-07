import React, { useContext } from "react";
import { ContextLogin } from "../Context/ContextLogin";

export default function Profile() {
  const { username, email } = useContext(ContextLogin);

  return (
    <div className="border border-purple-800 rounded bg-purple-200 w-[500px] h-56 mt-56 ml-[500px]">
      <div className="m-12">
        <h1 className="text-center font-bold text-2xl text-purple-800 shadow-lg h-10">
          Your Profile
        </h1>
        <h3 className="mt-8 text-center ">
          <span className="font-semibold mr-2">Name:</span>
          {username}
        </h3>
        <h3 className=" text-center">
          <span className="font-semibold mr-2">Email:</span> {email}
        </h3>
      </div>
    </div>
  );
}
