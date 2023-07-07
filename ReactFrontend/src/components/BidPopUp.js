import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const BidPopUp = ({ isOpen, onClose, auction }) => {
  const { submitBid, fetchUpdatedAuctions } = useContext(GlobalContext);
  const [bidAmount, setBidAmount] = useState("");
  const bidderId = "Hello";
  const [errorMessage, setErrorMessage] = useState("");
  const [throughTheRoof, setThroughTheRoof] = useState(false); // State to indicate if bid exceeds the roof

  const handleBidAmountChange = (e) => {
    setBidAmount(e.target.value);
  };
  const handleClose = () => {
    setThroughTheRoof(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      bidAmount <= auction.currentHighestBid ||
      bidAmount < auction.startPrice
    ) {
      console.error("Bid amount is too low");
      setErrorMessage("Bid amount is too low");
      return; // Exit the function early if the bid amount is too low
    }

    if (bidAmount > auction.roof) {
      fetchUpdatedAuctions();
      console.log("Bidder has bought the item");
      setThroughTheRoof(true); // Set throughTheRoof state to true
    }

    console.log(auction.auctionId);
    submitBid(bidAmount, auction.auctionId, bidderId);
    console.log(bidAmount);
    //onClose();
    setErrorMessage("");
    setBidAmount("");
  };

  if (!isOpen) {
    return null; // If popup is not open, don't render anything
  }

  return (
    <div className={`bid-popup ${throughTheRoof ? "celebrating" : ""}`}>
      <div className="bid-popup-content">
        <h2>Place Bid</h2>

        <div className="bid-info">
          <div>
            <h3>{auction.title}</h3>
            <p>Description: {auction.description}</p>
            <p>Start Price: {auction.startPrice}</p>
            <p>Current highest bid: {auction.currentHighestBid}</p>
            <p>Start Time: {auction.start}</p>
            <p>End Time: {auction.end}</p>
            <p>Seller: {auction.sellerId}</p>
          </div>
          <div className="bid-img">
            <img src={auction.images} alt="Auction" />
          </div>
          {throughTheRoof && (
            <p className="through-the-roof-text">
              You just went through the roof!!!
            </p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        {!throughTheRoof && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Bid Amount:</label>
              <input
                type="number"
                value={bidAmount}
                onChange={handleBidAmountChange}
                required
              />
            </div>
            <button type="submit">Submit Bid</button>
          </form>
        )}
        <button
          className="close-button"
          onClick={() => {
            onClose();
            handleClose();
            fetchUpdatedAuctions();
          }}
        >
          Close
        </button>
      </div>
      {isOpen && <div className="bid-popup-overlay" onClick={onClose}></div>}
    </div>
  );
};

export default BidPopUp;
