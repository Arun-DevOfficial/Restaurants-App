import { createContext, useState } from "react";

// Create a Context for the menu
export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [selectData, setSelectData] = useState([]);

  //To add food
  const handleAddToCart = (Item) => {
    setSelectData((prevSelectData) => [...prevSelectData, Item]);
    console.log(selectData);
  };

  //To remove food from cart
  const handleRemoveToCart = (Item) => {
    console.log(Item);
  };

  return (
    <MenuContext.Provider
      value={{
        selectData,
        setSelectData,
        handleAddToCart,
        handleRemoveToCart,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
