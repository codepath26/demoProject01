import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-gray-600  text-white min-h-[30px] flex justify-around pb-2">
        <h1 className="text-green-400 font-bold border-b-2  border-white">Welcome</h1>
        <div className="w-[50%] flex justify-around">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "border-b border-y-red-700" : ""} `
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "border-b border-y-red-700" : ""} `
            }
            to="/companyInformation"
          >
            Company Information
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
