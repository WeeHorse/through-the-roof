import { useState } from "react";
import AuctionList from "./AuctionList";

const HomePage = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleSearchClick}>Search</button>
      <AuctionList isSearchVisible={isSearchVisible} />
    </div>
  );
};

export default HomePage;