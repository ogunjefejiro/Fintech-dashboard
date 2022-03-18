import { createContext, useState } from "react";

const ActiveContext = createContext();

export const ActiveContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const [activeCard, setActiveCard] = useState(1);

  return (
    <ActiveContext.Provider
      value={{
        show,
        activeCard,
        setShow,
        setActiveCard,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;
