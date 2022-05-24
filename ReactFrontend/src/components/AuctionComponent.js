import React from "react";
const AuctionComponent = ({ auction }) => {
  //console.log(auction);

  let url = auction.images;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{auction.title}</h5>
        <p className="card-text">{auction.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Start Price: {auction.startPrice}</li>
        <li className="list-group-item">End time: {auction.end}</li>
        <li className="list-group-item">Seller name: {auction.seller.name}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Put in a bid!
        </a>
        <a href="#" className="card-link">
          Seller account
        </a>
      </div>
    </div>
  );
};

export default AuctionComponent;

/* <div className="small-auction-component">
      <h6>{auction.title}</h6>
      <p>Start Price: {auction.startPrice}</p>
      <p>Time</p>
      <p>Seller name: {auction.seller.name}</p>
      <p>Start time: {auction.start}</p>
      <p>End time: {auction.end}</p>
      <div
        className="sac-image"
        style={{ cursor: "pointer", backgroundImage: `url(${auction.images})` }}
      >
        test
      </div>
    </div> */
