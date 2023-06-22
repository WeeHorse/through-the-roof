import { useContext } from "react";
import AuctionComponent from "./AuctionComponent";
import GlobalContext from "../context/GlobalContext";
import ListSearch from "./ListSearch";

const AuctionList = () => {
  const { auctions, searchTerm, searchCategory } = useContext(GlobalContext);

  return (
    <div className="auction-list">
      <ListSearch />
      {auctions
        .filter((auctions) => {
          if ({ searchTerm } == "") {
            return auctions;
          } else if (
            auctions.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return auctions;
          }
        })
        .map((auction) => (
          <AuctionComponent auction={auction} key={auction.auctionId} />
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
