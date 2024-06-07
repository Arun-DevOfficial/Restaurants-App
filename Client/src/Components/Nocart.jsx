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
                className="relative flex flex-col md:flex-row w-full my-3 justify-between rounded-lg bg-white p-3 shadow-md"
                key={item._id}
              >
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                  &times;
                </button>
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full md:w-28 h-28 rounded-lg object-cover"
                />
                <div className="text-center mt-2 md:mt-0 md:ml-2">
                  <h1 className="font-semibold">{item.name}</h1>
                  <p className="my-2">$ {item.price}</p>
                  <div className="flex gap-4 items-center mt-4 justify-center">
                    <button className="h-8 w-8 rounded-full bg-orange-500 font-bold text-white hover:bg-orange-400">
                      +
                    </button>
                    <p className="font-bold">{item.quantity}</p>
                    <button className="h-8 w-8 rounded-full bg-orange-500 font-bold text-white hover:bg-orange-400">
                      -
                    </button>
                  </div>
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
