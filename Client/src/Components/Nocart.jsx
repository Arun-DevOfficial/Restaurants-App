import { RiShoppingBag4Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { MenuContext } from "../Context/MenuContext";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function NoCart() {
  const { selectData, CartCount, handleRemoveToCart } = useContext(MenuContext);
  const [Quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    setQuantity(Quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };
  // to make an payment
  const handleMakePayment = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51OpQC3SJj5zy74CS3Btsbdybeo7GRXic9Ldqv9sYpefsA9Kla4PmvrcWGVyCKHz5XapiznegtYHR0noMd3OnNDLc003X0SzWD4"
      );
      const data = JSON.stringify(selectData);
      const response = await axios.post(
        "https://restaurants-app-3dp7.onrender.com/create-checkout-session",
        data, // Send the body directly
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      const session = await response.data; // Access the response data directly
      console.log(session);
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      if (result.error) {
        toast.error("Payment Can't start");
      }
    } catch (error) {
      console.error("Error in handleMakePayment:", error);
      toast.error("Payment Failed");
    }
  };

  return (
    <>
      <div className="bg-white p-12 flex-shrink-0 rounded-r-[40px] flex flex-col">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-semibold text-3xl">
            Order <span className="font-normal">Menu</span>
          </h1>
          <div className="bg-white p-4 border cursor-pointer relative border-transparent hover:shadow-sm hover:border-gray-300 rounded-xl">
            <RiShoppingBag4Line className="w-6 h-6 text-gray-500" />
            <div className="bg-orange-500 rounded-full absolute top-3 text-center text-white font-bold font-offer w-4 h-4 text-xs right-3">
              {CartCount}
            </div>
          </div>
        </div>
        <div>
          {selectData.length !== 0 ? (
            <>
              <div className="flex flex-col justify-between min-h-screen">
                <div className="w-full">
                  {selectData.map((item, index) => (
                    <div
                      className="relative flex flex-col md:flex-row w-full my-3 justify-between rounded-lg bg-white p-3 shadow-md"
                      key={index}
                    >
                      <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={() => handleRemoveToCart(item._id)}
                      >
                        &times;
                      </button>
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full md:w-28 h-28 rounded-lg object-cover"
                      />
                      <div className="text-center mr-4">
                        <h1 className="font-semibold">{item.name}</h1>
                        <p className="my-2">$ {item.price}</p>
                        <div className="flex gap-4 items-center mt-4 justify-center">
                          <button
                            className="h-8 w-8 rounded-full bg-orange-500 font-bold text-white hover:bg-orange-400"
                            onClick={handleIncrementQuantity}
                          >
                            +
                          </button>
                          <p className="font-bold">{Quantity}</p>
                          <button
                            className="h-8 w-8 rounded-full bg-orange-500 font-bold text-white hover:bg-orange-400"
                            onClick={handleDecrementQuantity}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="my-6 text-orange-500 border border-orange-500 px-6 py-3 hover:bg-orange-500 hover:text-white font-semibold rounded-lg"
                  onClick={handleMakePayment}
                >
                  Pay Now
                </button>
              </div>
            </>
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
      <Toaster />
    </>
  );
}
