import { useState } from "react";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div onClick={() => setOpenMenu(!openMenu)}>
        <a href="#" className="hover:text-[#EA6D27]">
          Menu
        </a>
      </div>
      {openMenu && (
        <div className="fixed left-[430px] bg-white w-3/6 p-36 rounded-xl top-20 shadow-xl border transition-all duration-300"></div>
      )}
    </>
  );
}
