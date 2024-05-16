import { useState } from "react";
import { FaRegUser, FaSignInAlt, FaHeadphonesAlt } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function AuthMenu() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div
        className="flex space-x-2 cursor-pointer items-center"
        onClick={() => setMenu(!menu)}
      >
        <FaRegUser />
        <h1>Account</h1>
      </div>
      {menu && (
        <div className="fixed font-pops top-20 space-y-4 right-[280px] shadow-xl bg-white items-center w-[200px] rounded-lg flex p-4 flex-col text-center">
          <a
            href="#"
            className="bg-slate-100/40 py-3 capitalize px-8 hover:bg-[#eb6f28] hover:text-white w-full rounded-lg flex space-x-3 items-center"
          >
            <FaSignInAlt />
            <p>Sign In</p>
          </a>
          <a
            href="#"
            className="bg-slate-100/40 py-3 capitalize px-8 hover:bg-[#eb6f28] hover:text-white w-full rounded-lg flex items-center space-x-3"
          >
            <RiLogoutCircleLine />
            <p>Login</p>
          </a>
          <a
            href="#"
            className="bg-slate-100/40 py-3 capitalize px-8 hover:bg-[#eb6f28] hover:text-white w-full rounded-lg flex space-x-3 items-center"
          >
            <FaHeadphonesAlt />
            <p>Support</p>
          </a>
        </div>
      )}
    </>
  );
}
