import { FiEdit } from "react-icons/fi";
import { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";

export default function NoCart() {
  const { selectData } = useContext(MenuContext);
  console.log(selectData);
  return (
    <div className="bg-white p-12 flex-shrink-0 rounded-r-[40px] flex flex-col">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold text-3xl">
          Order <span className="font-normal">Menu</span>
        </h1>
        <div className="bg-white p-4 border cursor-pointer border-transparent hover:shadow-sm hover:border-gray-300 rounded-xl">
          <FiEdit className="w-6 h-6 text-gray-500" />
        </div>
      </div>
      <div>
        {selectData.length !== 0 ? (
          <div className="w-full p-2">
            {selectData.map((item) => (
              <div
                className="my-12 rounded-lg bg-white p-2 shadow-md flex justify-between items-center"
                key={item._id}
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg" // Adjust the width and height here
                  style={{ objectFit: "cover" }} // Ensure images maintain aspect ratio
                />
                <div>
                  <h1 className="text-xl font-mono">{item.name}</h1>
                  <p className="my-2 font-mono">$ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="my-24">
            <div className="sticky top-0">
              <img
                src="https://i.pinimg.com/originals/e9/50/a8/e950a8bf7540fba6b0cc6b23dcd8f29b.gif"
                alt="No Cart"
              />
              <div className="text-center w-full max-w-[85%] mx-auto">
                <p className="text-2xl font-offer">
                  <strong>Oops, your cart is snackless!</strong>
                </p>
                <p className="py-7 font-offer">
                  Looks like you forgot to add some snacks. Lets fix that!
                </p>
                <button className="font-offer text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-500 rounded-lg px-6 py-2">
                  Browse Snacks Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
