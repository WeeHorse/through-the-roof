import { useContext, useState } from "react";
import AuctionComponent from "./AuctionComponent";
import GlobalContext from "../context/GlobalContext";
import ListSearch from "./ListSearch";
import BidPopUp from "./BidPopUp";

const AuctionList = ({ isSearchVisible }) => {
  const { auctions, searchTerm, searchCategory } = useContext(GlobalContext);
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [isBidPopUpOpen, setIsBidPopUpOpen] = useState(false);
  const soldImgUrl =
    "https://clipart-library.com/images_k/sold-transparent-background/sold-transparent-background-10.png";

  const handlePutInBidClick = (auction) => {
    setSelectedAuction(auction);
    setIsBidPopUpOpen(true);
    console.log(auction);
    console.log(auction.auctionId);
  };

  return (
    <div className="auction-list">
      <BidPopUp
        isOpen={isBidPopUpOpen}
        onClose={() => setIsBidPopUpOpen(false)}
        auction={selectedAuction}
      />

      {isSearchVisible && <ListSearch />}

      {auctions
        .filter((auction) => {
          if (searchTerm === "") {
            return true;
          } else {
            return auction.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          }
        })
        .map((auction) => (
          <AuctionComponent
            auction={auction}
            key={auction.auctionId}
            onPutInBidClick={handlePutInBidClick}
          />
        ))}

      <button
        onClick={() => {
          console.log(Object.keys(auctions[0]));
        }}
      >
        keys
      </button>
    </div>
  );
};

export default AuctionList;
