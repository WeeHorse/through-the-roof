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
  const submitBid = async (bidAmount, auctionId, bidderId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/auction/${auctionId}/bids`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bidAmount, bidderId }),
        }
      );

      if (response.ok) {
        // Bid submitted successfully
        // Do something with the response if needed
        console.log("Bid submitted successfully");
      } else {
        // Handle error response
        console.error("Failed to submit bid");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error occurred while submitting bid", error);
    }
  };

  const updateAuctions = (newAuctions) => {
    setAuctions(newAuctions);
  };

  const fetchUpdatedAuctions = async () => {
    try {
      const response = await fetch("http://localhost:8080/auction/getAll");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const fetchedAuctions = await response.json();
      console.log(auctions);
      setIsLoading(false);
      updateAuctions(fetchedAuctions); 
    } catch (error) {
      console.error(error);
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
        submitBid,
        fetchUpdatedAuctions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
