const AuctionComponent = ({ auction, onPutInBidClick }) => {
  let url = auction.images;
  if (!auction || !auction.title) {
    return null; // or display a placeholder/loading state
  }
  return (
    <div className="card">
      {auction.status === "ended" && (
        <div className="sold-overlay">
          <img
            src="https://clipart-library.com/images_k/sold-transparent-background/sold-transparent-background-10.png"
            className="sold-image"
            alt="Sold"
          />
        </div>
      )}

      <div>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{auction.title}</h5>
          <p className="card-text">{auction.description}</p>
        </div>
      </div>

      <div className="card-flex">
        <div className="card-body">
          <p className="seller-info">
            <span className="seller-label">Seller:</span> {auction.sellerId}
          </p>
          <a className="card-link" onClick={() => onPutInBidClick(auction)}>
            Put in a bid!
          </a>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Start Price: {auction.startPrice}</li>
          <li className="list-group-item">Started: {auction.start}</li>
          <li className="list-group-item">Ends: {auction.end}</li>
          <li className="list-group-item">
            Current highest bid: {auction.currentHighestBid}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuctionComponent;
