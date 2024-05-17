import { useState } from "react";
import Logo from "../../../assets/Logo.png";

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
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">event</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        <div className="flex space-x-10 items-center">
          <h1 className="cursor-pointer hidden lg:block" onClick={toggleDropdown}>
            Account
          </h1>
          <button className="font-medium text-md ml-3 bg-[#ea6d27] hover:bg-[#ea6d27]/90 rounded-tr-md rounded-bl-md rounded-tl-[12px] rounded-br-[12px] text-white px-6 py-3 shadow-lg shadow-black/20 hidden lg:block">
            Book a table
          </button>
        </div>
        {open && (
          <div className="absolute right-24 top-24 w-48 items-center p-3 bg-black/10 backdrop-blue-sm text-white rounded-lg shadow-md border flex flex-col space-y-4">
            <a
              href="#"
              className="rounded-lg p-2 font-medium w-full bg-white/20 hover:bg-orange-500 hover:text-white text-center"
            >
              Profile
            </a>
            <a
              href="#"
              className="rounded-lg p-2 bg-white/20 font-medium w-full hover:bg-orange-500 hover:text-white text-center"
            >
              Settings
            </a>
            <a
              href="#"
              className="rounded-lg p-2 font-medium bg-white/20 w-full hover:bg-orange-500 hover:text-white text-center"
            >
              Logout
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
