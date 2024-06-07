import { useCallback, useEffect, useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { MenuContext } from "../../Context/MenuContext";

export default function Menu() {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [loading, setLoading] = useState(false);
  const { handleAddToCart } = useContext(MenuContext);

  //To get all Menu
  const handleGetMenu = useCallback(async () => {
    // setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_BACKEND_URL}/menu`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      // setError(error.message);
    } finally {
      // setLoading(false);
    }
  }, []);

  // To handle search
  const handleSearch = useCallback(async () => {
    // setLoading(true); // Start loading
    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_BACKEND_URL}/search?q=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const searchData = await response.json();
      setSearchResults(searchData);
    } catch (error) {
      // Handle error
    } finally {
      // setLoading(false); // Stop loading
    }
  }, [searchQuery]);

  // To fetch Call after component mount
  useEffect(() => {
    handleGetMenu();
  }, [handleGetMenu]);

  // to handle search
  const handleSearchMenu = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <section className="p-12 bg-[#fafafa] min-h-screen">
        <div className="flex justify-between sticky top-0 p-4 bg-[#fafafa] backdrop-blur-sm">
          <h1 className="font-offer font-semibold text-3xl">
            Menu <span className="font-normal">Category</span>
          </h1>
          <div className="bg-gray-100 px-3 py-2 rounded-lg shadow flex justify-between items-center gap-3">
            <FiSearch
              className="text-orange-500 cursor-pointer h-5 w-5"
              onClick={handleSearch}
            />
            <input
              placeholder="Search for food, coffee..."
              className="focus:outline-none bg-transparent placeholder:text-sm placeholder-gray-400 font-pops"
              value={searchQuery}
              onChange={handleSearchMenu}
            />
          </div>
        </div>
        <div className="my-12">
          <h1 className="my-8 pl-4 font-offer font-semibold text-2xl">
            Popular <span className="font-normal">Choices</span>
          </h1>
          <div className="flex my-12 justify-around">
            {data.map((category, index) => (
              <div
                key={index}
                onClick={() => {
                  setSearchQuery(category.name);
                  handleSearch();
                }}
                className="bg-white group text-center flex flex-col items-center shadow-md rounded-2xl cursor-pointer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=fBRI0EWAcmTk&format=png&color=000000"
                  alt="icon"
                  className="bg-slate-100/60 p-10 rounded-t-2xl"
                />
                <h1 className="font-offer font-medium w-full rounded-b-2xl group-hover:text-white group-hover:bg-orange-400">
                  {category.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto p-4 my-4">
          <h1 className="my-8 font-offer font-semibold text-2xl">
            Choose <span className="font-normal">Order</span>
          </h1>
          <div>
            {searchResults.length > 0
              ? searchResults.map((category, index) => (
                  <div key={index} className="mb-8">
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                      key={index}
                    >
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => handleAddToCart(item)}
                            loading="lazy"
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
                ))
              : data.map((category, index) => (
                  <div key={index} className="mb-8">
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                      key={index}
                    >
                      {category.items.map((item, itemIndex) => {
                        return (
                          <div
                            key={itemIndex}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                          >
                            <img
                              src={item.image_url}
                              alt={item.name}
                              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                              onClick={() => handleAddToCart(item)}
                              loading="lazy"
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
                        );
                      })}
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
