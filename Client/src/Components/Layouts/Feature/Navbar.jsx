import { useState } from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <header
      className="w-full font-pops lg:w-[80%] mx-auto relative text-white"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <nav className="flex items-center font-medium text-lg p-3 justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="max-w-14" />
          <h1 className="text-xl font-semibold">
            Thaai <span className="text-orange-500">food</span>
          </h1>
        </div>
        <ul className="hidden lg:flex space-x-6 capitalize">
          <li>
            <Link to="#">home</Link>
          </li>
          <li>
            <Link to="#">about</Link>
          </li>
          <li>
            <Link to="/Menu">menu</Link>
          </li>
          <li>
            <Link to="#">event</Link>
          </li>
          <li>
            <Link to="#">contact</Link>
          </li>
        </ul>
        <div className="flex space-x-3 items-center">
          <div className="flex gap-3 items-center pr-5">
            <FaRegUser />
            <h1
              className="cursor-pointer hidden lg:block"
              onClick={toggleDropdown}
            >
              Account
            </h1>
          </div>
          <button className="font-medium text-md bg-[#ea6d27] hover:bg-[#ea6d27]/90 rounded-tr-md rounded-bl-md rounded-tl-[12px] rounded-br-[12px] text-white px-6 py-3 shadow-lg shadow-black/20 hidden lg:block">
            Book a table
          </button>
        </div>
        {open && (
          <div className="absolute right-24 top-24 w-48 items-center backdrop-blur-md p-3 bg-black/10 backdrop-blue-sm text-white rounded-lg shadow-md border border-white/10 flex flex-col space-y-4">
            <Link
              to="/profile"
              className="rounded-lg p-2 font-medium w-full bg-white/10 hover:bg-orange-500 hover:text-white text-center"
            >
              Profile
            </Link>
            <Link
              to="#"
              className="rounded-lg p-2 bg-white/10 font-medium w-full hover:bg-orange-500 hover:text-white text-center"
            >
              Settings
            </Link>
            <Link
              to="#"
              className="rounded-lg p-2 font-medium bg-white/10 w-full hover:bg-orange-500 hover:text-white text-center"
            >
              Logout
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
