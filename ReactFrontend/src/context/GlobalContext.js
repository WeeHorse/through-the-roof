import React from "react";
import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [auctions, setAuctions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState(["title"]);

  useEffect(() => {
    fetchAuctions();
  }, []);

  const fetchAuctions = async () => {
    const response = await fetch("/auctions");
    const auctions = await response.json();
    console.log(auctions);
    setAuctions(auctions);
    setIsLoading(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        auctions,
        isLoading,
        searchTerm,
        setSearchTerm,
        searchCategory,
        setSearchCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
