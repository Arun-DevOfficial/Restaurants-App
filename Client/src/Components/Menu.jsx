// import React from 'react'
import { useState } from "react";
import { HiMenuAlt3, HiPlus } from "react-icons/hi";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden" onClick={() => setOpen(!open)}>
        <HiMenuAlt3 />
      </div>
      <div
        className={`${
          open
            ? "fixed bg-white top-0 left-0 right-0 h-[300px] shadow-md border-b border-slate-100 p-8 transition-all duration-300 ease-in-out"
            : "fixed top-0 left-0 right-0 h-[300px] transform transition-all duration-300 ease-in-out -translate-y-full"
        }`}
      >
        <div className="flex justify-end">
          <HiPlus
            className="rotate-45 w-5 h-5 text-slate-800 transition-transform duration-300 ease-in-out"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
