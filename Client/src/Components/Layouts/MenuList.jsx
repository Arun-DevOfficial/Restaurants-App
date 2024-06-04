import { useCallback, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

export default function Menu() {
  const [data, setData] = useState([]);

  //To get all Menu
  const handleGetMenu = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_BACKEND_URL}/menu`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      //   setError(error.message);
    } finally {
      //   setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetMenu();
  }, [handleGetMenu]);

  return (
    <>
      <section className="p-12 bg-[#fafafa]">
        <div className="flex justify-between sticky top-0 p-4 bg-[#fafafa] backdrop-blur-sm">
          <h1 className="font-offer font-semibold text-3xl">
            Menu <span className="font-normal">Category</span>
          </h1>
          <div className="bg-gray-100 px-3 py-2 rounded-lg shadow flex justify-between items-center gap-3">
            <FiSearch className="text-orange-500 cursor-pointer h-5 w-5" />
            <input
              placeholder="Search for food, coffee..."
              className="focus:outline-none bg-transparent placeholder:text-sm placeholder-gray-400 font-pops"
            />
          </div>
        </div>
        <div className="container mx-auto p-4 my-4">
          <h1 className="my-8 font-offer font-semibold text-2xl">
            Choose <span className="font-normal">Order</span>
          </h1>
          <div>
            {data.map((category, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-medium font-offer mb-4">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white shadow-md rounded-lg overflow-hidden"
                    >
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold font-offer">
                          {item.name}
                        </h3>
                        <p className="text-gray-700 mt-2 font-pops">
                          Price: ${item.price.toFixed(2)}
                        </p>
                        <div className="flex gap-2 items-baseline">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <p className="text-yellow-500 mt-2 font-pops text-md">
                            {item.rating}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
