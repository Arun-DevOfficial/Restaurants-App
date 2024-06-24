import { createContext, useState } from "react";

// Create a Context for the menu
export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [selectData, setSelectData] = useState([]);
  const [CartCount, setCartCount] = useState(0);
  const [filterData, setFilterData] = useState([]);

  //To add food
  const handleAddToCart = (Item) => {
    try {
      setSelectData((prevSelectData) => [...prevSelectData, Item]);
      setCartCount(CartCount + 1);
      console.log(selectData);
    } catch (error) {
      console.error(error);
    }
  };

  //To remove food from cart
  const handleRemoveToCart = (id) => {
    setCartCount(CartCount - 1);
    console.log(id);
    setFilterData(id);
    setSelectData(() => {
      return selectData.filter((item) => item.id !== id);
    });
  };

  return (
    <MenuContext.Provider
      value={{
        selectData,
        setSelectData,
        CartCount,
        filterData,
        handleAddToCart,
        handleRemoveToCart,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
