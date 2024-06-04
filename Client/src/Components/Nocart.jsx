import { FiEdit } from "react-icons/fi";

export default function NoCart() {
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
              Looks like you forgot to add some snacks. Let's fix that!
            </p>
            <button className="font-offer text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-500 rounded-lg px-6 py-2">
              Browse Snacks Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
