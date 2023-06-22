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
    try {
      const response = await fetch("http://localhost:8080/auction/getAll");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const auctions = await response.json();
      console.log(auctions);
      setAuctions(auctions);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      // Handle the error state
    }
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
