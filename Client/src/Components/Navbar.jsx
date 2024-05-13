import Logo from "../assets/Logo.png";
import Menu from "./Menu";

function Navbar() {
  return (
    <>
      <nav className="w-full md:w-[80%] mx-auto flex justify-between items-center p-3 sticky top-0">
        <div className="flex md:space-x-1 items-center cursor-pointer">
          <img src={Logo} alt="logo" className="w-16" />
          <h1 className="text-slate-800 font-semibold text-md md:text-xl lg:text-2xl">
            Restaurant
          </h1>
        </div>
        <ul className="lg:flex hidden space-x-7 capitalize font-light">
          <li>
            <a href="#" className="hover:text-[#EA6D27]">menu</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#EA6D27]">event</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#EA6D27]">gallary</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#EA6D27]">about</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#EA6D27]">contact</a>
          </li>
        </ul>
        <div className="bg-[#ea6d27] hover:bg-[#ea6d27]/90 rounded-tr-md rounded-bl-md rounded-tl-[12px] rounded-br-[12px] text-white px-6 py-3 shadow-lg shadow-black/20 hidden lg:block">
          <button className="font-medium text-md">Book a table</button>
        </div>
        <Menu />
      </nav>
    </>
  );
}

export default Navbar;
