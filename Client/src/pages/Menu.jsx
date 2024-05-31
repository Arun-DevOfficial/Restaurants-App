// import Logo from "../../assets/Logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

export default function Menu() {
  return (
    <>
      <section className="bg-[#F9F9F9] p-9">
        <div className="lg:w-[80%] mx-auto min-h-screen">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <FaBarsStaggered className="cursor-pointer" />
              <h1 className="font-semibold font-offer">Order Menu</h1>
            </div>
            <div className="flex justify-between h-full items-center w-96 py-3 px-4 rounded-xl bg-slate-100">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none flex-grow font-medium font-offer"
              />
              <BsSearch className="flex-shrink-0 text-orange-400 cursor-pointer" />
            </div>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            libero ratione quasi quas eum tempore explicabo tempora enim commodi
            dolore, eligendi minus unde autem, ipsa nisi facere. Saepe,
            praesentium soluta.
          </div>
        </div>
      </section>
    </>
  );
}
